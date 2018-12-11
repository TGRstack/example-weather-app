# Commits Plan

0. [x] this documentation and an init commit
1. [x] some simple data rendering a WeatherCurrent w/ a 5-day WeatherForecast beneath it, follow stage88 mock
2. [x] determine full shape of data and improve details of WeatherCurrent & WeatherForecast components
   1. Use openWeather's 16daily forecast instead of 5-day forecast and combining them
3. [x] format/style WeatherCurrent and WeatherDailyForecast components
4. [x] render an image for each day
7. [x] setup graphql state & network requests
8. User welcome screen capture initial city/zipcode to use


## STRETCH GOALS - sorry
9.  create WeatherDetail page per day
   1. 24-hour breakdown if available
10. create mobileHeader to navigate back to the main page from the detail page

## STRETCH GOALS

1. config/cities page
   1. add slideOut navigation to mobileHeader
2.  testing per component (positive & negative)
3.  integration test of API requests

## Gold plating

1. **Service Provider Key Storage**
   1. Decrypt my provided key w/ a password
   2. Replace my key w/ your own
   3. Store an Encrypted version in localStorage
   4. FAQ page explains how to get your own key

2. **Air Quality Index**
   1. Add Second Service Provider Key to Storage https://docs.openaq.org/#api-Measurements
   2. Update WeatherCurrent & WeatherForecast w/ AQI data
   3. Update WeatherDetail w/ AQI data

3. **App Settings**
   1. Choose metric or imperial units
   2. Render a sample WeatherCurrent and expose knobs to see impact of settings
   3. Set warning levels for AQI, Temperature (cold and hot)
   4. optionally colorize values based on warning levels (100'C is colored RED)

4. **WeatherDetail Page**
   1. Render an hourly graph of AQI, Temp, Percipitation, Wind (select which series to show at once)

5. **WeatherCurrent**
   1.  If after 1700 switch to "Tonight"
   2.  Show Tonight summary if Today, or Tomorrow summary if Tonight
   3.  Background "Image" is a Canvas drawn gradient driven by current time, flipping at Sunrise/Sunset

6. **Insights**
   1.  If a weather event is likely to happen (50% chance to rain) then highlight this
       1. weather events: high % percipitation, high wind, high AQI
       2. insight: `60% chance of rain starting at 4am`
   2.  Compare this week to 50-years ago and 100-years ago (additional service provider)

### Fullstack - Add a Weather Server

I did not start w/ the fullstack approach because I don't want to pay for a DO droplet or EC2 instance.

I have a service I wrote for openweather in May which I will eventually point the FE too instead of:
* directly using the service providers
* exposing access tokens to anyone w/ the knowledge to look at network requests

Additional advantages of the backend:
* multiple users subscribed to the same location make only 1 request to the data provider
* round-robin donated accessTokens to subscribe to more cities and spread requests out per token
  * eventually put a TOR proxy infront of the service to prevent from being IP banned
* historical data per city
  * HOURLY historical data (only 3-hour forecasts are available from OpenWeather)
  * AGGREGATE historical data