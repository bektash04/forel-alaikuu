import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { X, MapPin, Navigation, Route, Loader } from 'lucide-react';

// Координаты фермы (те же что в MapBlock)
const FARM_POSITION = [40.31034, 74.24041];

// Список городов Кыргызстана с их координатами
const CITIES = [
  { name: 'Бишкек', coords: [42.8746, 74.5698] },
  { name: 'Ош', coords: [40.5283, 72.7985] },
  { name: 'Джалал-Абад', coords: [40.9333, 73.0000] },
  { name: 'Каракол', coords: [42.4906, 78.3936] },
  { name: 'Талас', coords: [42.5228, 72.2422] },
  { name: 'Нарын', coords: [41.4287, 75.9911] },
  { name: 'Баткен', coords: [40.0617, 70.8197] },
  { name: 'Чолпон-Ата', coords: [42.6494, 77.0822] },
];

// Кастомная иконка для фермы (оранжевая)
const farmIcon = L.divIcon({
  className: 'custom-farm-pin',
  html: `
    <div style="
      width: 44px; height: 44px;
      background: linear-gradient(135deg, #f97316, #ea580c);
      border: 3px solid white;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 4px 12px rgba(249, 115, 22, 0.6);
      display: flex; align-items: center; justify-content: center;
    ">
      <div style="transform: rotate(45deg); font-size: 22px;">🐟</div>
    </div>
  `,
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  popupAnchor: [0, -44],
});

// Кастомная иконка для местоположения пользователя (синяя)
const userIcon = L.divIcon({
  className: 'custom-user-pin',
  html: `
    <div style="
      width: 40px; height: 40px;
      background: linear-gradient(135deg, #3b82f6, #1d4ed8);
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.6);
      display: flex; align-items: center; justify-content: center;
    ">
      <div style="font-size: 18px;">📍</div>
    </div>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

// Внутренний компонент для построения маршрута
// (Должен быть ВНУТРИ MapContainer чтобы иметь доступ к карте через useMap)
function RoutingMachine({ from, to, onRouteFound }) {
  const map = useMap();
  const routingControlRef = useRef(null);

  useEffect(() => {
    if (!from || !to) return;

    // Если уже есть старый маршрут — удалить его
    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current);
    }

    // Создать новый маршрут
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
      lineOptions: {
        styles: [{ color: '#f97316', weight: 5, opacity: 0.8 }],
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      createMarker: () => null, // не создавать стандартные маркеры — у нас свои
    }).addTo(map);

    // Когда маршрут найден — передать данные наружу
    routingControl.on('routesfound', (e) => {
      const route = e.routes[0];
      const distance = (route.summary.totalDistance / 1000).toFixed(1); // км
      const time = Math.round(route.summary.totalTime / 60); // минуты
      onRouteFound({ distance, time });
    });

    routingControlRef.current = routingControl;

    // Очистка при размонтировании
    return () => {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }
    };
  }, [from, to, map, onRouteFound]);

  return null;
}

// Главный компонент модального окна
export default function FullMapModal({ isOpen, onClose, t }) {
  const [userPosition, setUserPosition] = useState(null); // координаты пользователя
  const [selectedCity, setSelectedCity] = useState(null); // выбранный город
  const [routeInfo, setRouteInfo] = useState(null); // {distance, time}
  const [loading, setLoading] = useState(false); // идёт ли определение локации
  const [error, setError] = useState(null);

  // Сброс состояния при закрытии
  useEffect(() => {
    if (!isOpen) {
      setUserPosition(null);
      setSelectedCity(null);
      setRouteInfo(null);
      setError(null);
    }
  }, [isOpen]);

  // Автоопределение местоположения через GPS браузера
  const detectLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Браузер не поддерживает геолокацию');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPosition([pos.coords.latitude, pos.coords.longitude]);
        setSelectedCity(null);
        setLoading(false);
      },
      () => {
        setError('Не удалось определить местоположение. Разрешите доступ или выберите город вручную.');
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // Выбор города из списка
  const selectCity = (city) => {
    setSelectedCity(city);
    setUserPosition(city.coords);
    setError(null);
  };

  // Точка от которой строить маршрут (геолокация ИЛИ выбранный город)
  const startPoint = userPosition;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 lg:p-4">

      {/* Кнопка закрытия */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[210] w-12 h-12 rounded-full bg-white hover:bg-red-500 hover:text-white text-slate-900 flex items-center justify-center transition-all shadow-2xl"
        aria-label="Закрыть"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Контейнер модалки */}
      <div className="w-full h-full max-w-7xl max-h-[95vh] rounded-2xl overflow-hidden bg-white shadow-2xl flex flex-col lg:flex-row">

        {/* ЛЕВАЯ ПАНЕЛЬ — управление маршрутом */}
        <div className="w-full lg:w-96 bg-gradient-to-br from-slate-900 to-teal-900 text-white p-6 lg:p-8 overflow-y-auto flex-shrink-0">

          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold tracking-[0.15em] mb-3">
              МАРШРУТ
            </span>
            <h2 className="text-2xl lg:text-3xl font-black font-display mb-2">
              Как до нас доехать
            </h2>
            <p className="text-cyan-200/80 text-sm">
              Выберите свой город или используйте GPS
            </p>
          </div>

          {/* Кнопка автоопределения */}
          <button
            onClick={detectLocation}
            disabled={loading}
            className="w-full mb-4 px-5 py-4 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold rounded-2xl transition-all shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Определяем...
              </>
            ) : (
              <>
                <Navigation className="w-5 h-5" />
                Использовать моё местоположение
              </>
            )}
          </button>

          {/* Разделитель */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-xs text-cyan-200/60 font-bold">ИЛИ ВЫБЕРИТЕ ГОРОД</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Список городов */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {CITIES.map((city) => (
              <button
                key={city.name}
                onClick={() => selectCity(city)}
                className={`px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  selectedCity?.name === city.name
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>

          {/* Ошибка */}
          {error && (
            <div className="mb-4 p-4 rounded-xl bg-red-500/20 border border-red-400/30 text-red-200 text-sm">
              {error}
            </div>
          )}

          {/* Информация о маршруте */}
          {routeInfo && (
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-3">
              <div className="flex items-center gap-2 text-orange-300 mb-2">
                <Route className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider font-bold">Маршрут построен</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-cyan-200/70 font-medium mb-1">Расстояние</div>
                  <div className="text-2xl font-black font-display">{routeInfo.distance} км</div>
                </div>
                <div>
                  <div className="text-xs text-cyan-200/70 font-medium mb-1">В пути</div>
                  <div className="text-2xl font-black font-display">
                    {Math.floor(routeInfo.time / 60)}ч {routeInfo.time % 60}м
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Адрес фермы */}
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-cyan-300 font-bold mb-1">
                  Куда едем
                </div>
                <div className="font-bold">Форель Алайкуу</div>
                <div className="text-sm text-cyan-200/70">{t.contacts.address}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ — сама большая карта */}
        <div className="flex-1 relative">
          <MapContainer
            center={FARM_POSITION}
            zoom={9}
            scrollWheelZoom={true}
            className="w-full h-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Пин фермы */}
            <Marker position={FARM_POSITION} icon={farmIcon}>
              <Popup>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                  🐟 Форель Алайкуу
                </div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                  {t.contacts.address}
                </div>
              </Popup>
            </Marker>

            {/* Пин пользователя (если выбран город или определена локация) */}
            {startPoint && (
              <Marker position={startPoint} icon={userIcon}>
                <Popup>
                  <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                    📍 {selectedCity ? selectedCity.name : 'Ваше местоположение'}
                  </div>
                </Popup>
              </Marker>
            )}

            {/* Построение маршрута */}
            {startPoint && (
              <RoutingMachine
                from={startPoint}
                to={FARM_POSITION}
                onRouteFound={setRouteInfo}
              />
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}