# renovate-sandbox4

To reproduce a renovate bug.

1. fork this repository
2. edit `renovate-config.js` to replace `okitan/renovate-sandbox4` to your forked repository name (e.g. `YOUR_NAME/renovate-sandbox4`)
3. run this command with your github token (with repo scopes)

```console
$ docker run --rm \
        --env LOG_LEVEL=debug \
        --env RENOVATE_CONFIG_FILE=/tmp/renovate-config.js \
        --env RENOVATE_TOKEN=$YOUR_GITHUB_TOKEN \
        --volume $(pwd)/renovate-config.js:/tmp/renovate-config.js \
        --volume /var/run/docker.sock:/var/run/docker.sock \
        renovate/renovate:23.26.0-slim \
          YOUR_NAME/renovate-sandbox4 --dry-run
```
