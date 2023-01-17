import React from "react";

const YandexMaps = () => {
  return (
    <div>
      <iframe
        style={{ width: "100%" }}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f2db7db51364e77fdc752418637bf3672f0d625805f3532c3a69a105501a06b&amp;source=constructor"
        width="600"
        height="450"
        // frameborder="0"
      ></iframe>
    </div>
  );
};

export default YandexMaps;
