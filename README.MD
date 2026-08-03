# @beyonk/pino-logtail

![Corepack](https://img.shields.io/badge/corepack-enabled-orange)

*@beyonk/pino-logtail* is a so called "transport" for the [pino](https://github.com/pinojs/pino) logger. *pino-logtail* receives *pino* logs from `stdin` and 
sends them to a logsene compatible logger such as [logtail](https://logtail.com) via `@logtail/node`.

For example:

```bash
$ node your-app.js | pino-logtail --token my-api-token
```

If your Better Stack source has its own dedicated ingesting host (e.g. sources created in region `eu-central-1a`), pass its URL via `--endpoint` instead of shipping to the legacy global endpoint:

```bash
$ node your-app.js | pino-logtail --token my-api-token --endpoint https://s123456.eu-central-1a.betterstackdata.com
```

## Demo

You can test the integration by running the demo:

```
$ pnpm demo -- --token <my-api-token>
```

## Install

You should install *pino-logtail* globally so that it can be used as a utility:

```bash
$ pnpm install --production -g @beyonk/pino-logtail
```

## Configuration

*@beyonk/pino-logtail* supports two config options:

- `token` (required) — your logtail (or compatible) api token.
- `endpoint` (optional) — a full URL (including `https://` scheme) for a dedicated ingesting host. When omitted, logs are sent to the default `https://in.logtail.com` endpoint.

## License

[MIT License](https://antony.mit-license.org/)