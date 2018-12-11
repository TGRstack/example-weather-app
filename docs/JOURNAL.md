# 20181209 - start 1015, end 1600 (some time off for lunch)

## Upgrade 2018-tgr-fullstack from last use in June
- [x] upgrade nvm
- [x] npm audit fix
- [x] ncu -u --semver minor
- [x] React 16.7
  - [x] Concurrently
- [ ] switch out PACKAGE_MANAGER in scripts
  pnpm apparently doesn't work w/ custom registries :-/

  ```
    const PACKAGE_MANAGER = "pnpm" // or npm or yarn
    const PACKAGE_MANAGER_EXEC = "pnpx" // or npx
  ```

### Considered replacing GX w/ styled-layout but...
I don't think using styled-components is a good way to make performant UI.
If you do a render test with styled-components vs css-modules you learn it's 3x slower.

### computer is so slow. still upgradig/installing stuff (11:30am)
### abandon upgrading tgr fullstack, some jest config error (11:50am)
going to abandon this path for now and switch to my backup plan - start with my tgr-react-app that I used a couple weeks ago. I thought it was missing prod scripts which is why I didn't start with it - it turns out that the `build.prod.client` works fine for netlify, what I'm missing is `build.prod.app` which creates a `dist` of the `components/` directory.

## Upgrade 2018-tgr-react-app from November
- [x] upgrade nvm
- [x] npm audit fix
- [x] ncu -u  --semverLevel minor
- [x] Submit PR #335 to apollo-link-state and publish package to @tgrx on npm
- [x] netlify demo
- [x] React 16.7
  - [x] Concurrently

## IDEA
const FallbackRoute = <R p='/config/services/' c={ConfigServices} exact />
<Routes>
  <AuthWall isAuthed={isDecryptedTokenInMemory} fallback={FallbackRoute}>
    <R p='/' c={WeatherForecast} exact />
    <R p='/config/app/' c={ConfigApp} exact />
    <R p='/config/locations' c={ConfigLocations} exact />
    <R p='/config/services' c={FallbackRoute} exact />
    <R p='/weather/details?queryId=:queryId' c={} exact />
  </AuthWall>
</Routes>

<hr />

# 20181210 - LOG - start 0830

0815: Create PLAN.md

0845: Develop w/ Chrome Device Toolbar set to: iPhone 6/7/8 150%

0855: Copy images and reference: https://github.com/stage88/react-weather/

0905: [resume] 10 minute [break] to coordinate my day and reply to some 
emails

0911: Commit#0, "Plan, Assignment, Journal" created

0935: Offload (from my mind) some more goldplating ideas to "PLAN.md"

~ 60 minute PLAN TOTAL

0947: [break]computer ran out of SWAP, rebooting (uptime 21.5d)

1000: [resume] to reboot computer, restart dev experience, bathroom

~ 20 minute CODE TOTAL

1025: partial-Commit#1, sample WeatherData and parser for Today & Forecast

1025: [break] prepare for interview that WENT until 1145

1200: [resume] Commit#1

1205: partial-Commit#1, typescript sample WeatherData and parse to app data

1210: [resume] 4 minutes [break] dealing w/ frozen VSCode, downloading latest version

1235: partial-Commit#1, openweather to MVP app data parser typescript

1305: partial-Commit#1, [changingDirection]
I am using 5-day, 3 hour forecast but this doesn't provide hourly data or daily data. Started to make a combiner for daily data and an averager for hourly data. Left the code commented at the bottom of the page to come back to.

~~I should restart w/ 16day daily forecast for the daily forecast data but I'm just going to continue with my current path of doing combined for daily forecasts.~~

**I'm going to restart w/ 16day daily forecast**

1310: [break] prepare for interview that goes until 1430

~ 70 minute PLAN TOTAL
~ 80 minute CODE TOTAL

1430: [resume]  partial-Commit#1, openweather forecast-16day sample

1500: [break] interview 1610, and a mental break from the day

1900: [resume] had dinner, [burned] right hand w/ boiling water

2045: finish-Commit#1, render current and forecast data w/ structure (w/o images)

## Commit 1 - 2045

From `./Plan.md`

```
1. this documentation and an init commit
2. some simple data rendering a WeatherCurrent w/ a 5-day WeatherForecast beneath it, follow stage88 mock
3. determine full shape of data and improve details of WeatherCurrent & WeatherForecast components
   1. Use openWeather's 16daily forecast instead of 5-day forecast and combining them
4. format/style WeatherCurrent and WeatherDailyForecast components
```

## Commit 2,3 - 2315

Commit 2 added a global function to the browser to reopen the window in a mobile size.

Commit 3 is from `./Plan.md`
```
4.  render an image for each day
```

I'm moving the weather detail page to a stretch goal. I hope there's enough other code here to show you that I can contribute high quality to the team.

[break] until 0015 to ice my hand, drink some coffee, and say goodnight to my family. Also added 8GB to my available swap space so my PC doesnt hang.

## Commit 4 - 0100

from `./PLAN.md`

```bash
7. setup graphql state & network requests
```

0230
- I got stymied by the apollo-utils@1.0.22 bug for a while
- OpenWeather's 16-day forecast API is now for subscribers only
- going to go my original route w/ of combining 3-hour chunks by day

0400
- ending it here, have the 5-day aggregation working
- creating git repo & deploying to netlify
