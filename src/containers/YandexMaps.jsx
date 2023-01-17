import React, { Component } from "react";
import { YMaps, Map, ZoomControl } from "react-yandex-maps";

export default class YMapsComponent extends Component {
  map = React.createRef();
  ymaps =  React.createRef();

  render() {
    return (
      <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}>
        <Map
          state={{ center: [55.76, 37.64], zoom: 10 }}
          instanceRef={this.map}
          onLoad={(ymapsInstance) => {
            this.ymaps.current = ymapsInstance;
            this.addSearchControlEvents();
          }}
          width="100%"
          height="400px"
          modules={["control.SearchControl"]}
        >
          <ZoomControl
            options={{ float: "none", position: { top: 100, right: 10 } }}
          />
        </Map>
      </YMaps>
    );
  }

  addSearchControlEvents = () => {
    const map = this.map.current;
    const ymaps = this.ymaps.current;

    const searchControl = new ymaps.control.SearchControl({
      options: {
        float: "left",
        floatIndex: 300,
        provider: "yandex#search",
        geoObjectStandardPreset: "islands#blueDotIcon",
        placeholderContent: "Поиск мест и адресов",
        maxWidth: 320,
        size: "large"
      }
    });
    map.controls.add(searchControl);

    searchControl.events.add("resultselect", function (e) {
      const searchCoords = searchControl.getResponseMetaData().SearchResponse
        .Point.coordinates;
      const display = searchControl.getResponseMetaData().SearchResponse
        .display;

      //console.log(searchControl.getResponseMetaData());

      if (display && display === "multiple") {
        map.setCenter([searchCoords[1], searchCoords[0]], 11);
      }
    });
  };
}


// import React from 'react';
// import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

// export default function App() {
//   const defaultState = {
//     center: [55.751574, 37.573856],
//     zoom: 5,
//   };

//   return (
//     <YMaps>
//       <Map defaultState={defaultState}>
//         <Placemark geometry={[55.684758, 37.738521]} />
//       </Map>
//     </YMaps>
//   );
// }