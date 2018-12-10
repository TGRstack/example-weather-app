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

# 20181210 - LOG - start 0830

0815: Create PLAN.md
0845: Develop w/ Chrome Device Toolbar set to: iPhone 6/7/8 150%
0855: Copy images and reference: https://github.com/stage88/react-weather/
0905: 10 minute break to coordinate my day and reply to some emails
