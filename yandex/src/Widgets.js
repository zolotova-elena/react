import React from "react";

import WeatherWidget from "./WeatherWidget";
import WidgetVisits from "./WidgetVisits";
import MapWidget from "./MapWidget";
import WidgetTV from "./WidgetTV";
import WidgetOnlineTV from "./WidgetOnlineTV";

/**
 * компонет оторажает все виджеты внизу страницы с помощью других компонентов
 * */

export default class Widgets extends React.Component {
    render () {
        const {widgets} = this.props.widgets;
        return (
            <div className={'app-widgets'}>
                <div className={'app-widgets-left'}>
                    <WeatherWidget weatherWidget={widgets.weatherWidget}/>
                    <WidgetVisits widgetVisits={widgets.widgetVisits}/>
                </div>
                <div className={'app-widgets-middle'}>
                    <MapWidget mapWidget={widgets.mapWidget}/>
                    <WidgetTV widgetTV={widgets.widgetTV}/>
                </div>
                <div className={'app-widgets-right'}>
                    <WidgetOnlineTV widgetOnlineTV={widgets.widgetOnlineTV}/>
                </div>
            </div>
        );
    }
}