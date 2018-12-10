# Commits Plan

0. this documentation and an init commit
1. some simple data rendering a WeatherToday w/ a 5-day WeatherForecast beneath it, follow stage88 mock
2. determine full shape of data and improve details of WeatherToday & WeatherForecast components
3. format/style WeatherToday and WeatherForecast components
4. create WeatherDetail page per day
   1. 24-hour breakdown if available
5. create mobileHeader to navigate back to the main page from the detail page
6. setup graphql state & network requests
7. User welcome screen capture initial city to use

## STRETCH GOALS

7. config/cities page
   1. add slideOut navigation to mobileHeader
8. testing per component (positive & negative)
9.  integration test of API requests

## Gold plating

1. **Service Key Storage**
   1. Decrypt my provided key w/ a password
   2. Replace my key w/ your own
   3. Store an Encrypted version in localStorage
   4. FAQ page explains how to get your own key

2. **App Settings**
   1. Choose metric or imperial units
   2. Render a sample WeatherToday and expose knobs to see impact of settings
   3. Set warning levels for AQI, Temperature (cold and hot)
   4. optionally colorize values based on warning levels (100'C is colored RED)

3. **WeatherDetail Page**
   1. Render an hourly graph of AQI, Temp, Percipitation, Wind (select which series to show at once)

4. **WeatherToday**
   1.  If after 1700 switch to "Tonight"
   2.  Show Tonight summary if Today, or Tomorrow summary if Tonight
   3.  Background "Image" is a Canvas drawn gradient driven by current time, flipping at Sunrise/Sunset

5. **Insights**
   1.  If a weather event is likely to happen (50% chance to rain) then highlight this
       1. weather events: high % percipitation, high wind, high AQI
       2. insight: `60% chance of rain starting at 4am`
