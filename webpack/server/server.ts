import * as path from 'path';
import * as express from 'express';
import * as webpack from 'webpack';

export function serve(port?: number) {
    port = port || process.env.PORT;

    const app = express();

    setupWebpackDevelopServer(app);

    app.use('/', express.static(path.resolve(__dirname, '../../')));
    app.use('/static', express.static(path.resolve(__dirname, '../../static')));

    app.listen(port, function (err: any) {
        if (err) {
            console.error(JSON.stringify(err));
            return;
        }

        console.log(`\n> Development server served at http://localhost:${port}\n\n`);
    });

    return app;
}

function setupWebpackDevelopServer(app: express.Express) {
    const config = require('../../webpack/webpack.config');
    const compiler = webpack(config);

    const devMiddleware = require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
        noInfo: true,
        stats: { colors: true },
        poll: true,
        quiet: false,
        reload: true
    });

    const hotMiddleware = require('webpack-hot-middleware')(compiler, { reload: true });

    app.use(devMiddleware);
    app.use(hotMiddleware);
}
