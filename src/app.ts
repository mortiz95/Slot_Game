import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';

//Routes
import indexRoutes from './routes';
import playRoutes from './routes/play';

class Application {

    app: express.Application;

    constructor(){
        this.app = express();
        this.setting();
        this.middlewares();
        this.routes();
    }

    setting(){
        this.app.set('port',5000.);
        this.app.set('views',path.join(__dirname,'views'));
        this.app.engine('.hbs',exphbs({
            layoutsDir: path.join(this.app.get('views'),'layouts'),
            partialsDir: path.join(this.app.get('views'),'partials'),
            defaultLayout: 'main',
            extname:'.hbs'
        }));
        this.app.set('view engine','.hbs');
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))

    }

    routes(){
        this.app.use(indexRoutes);
        this.app.use('/play', playRoutes);
        this.app.use(express.static(path.join(__dirname,'public')));
    }

    start(){
        this.app.listen(this.app.get('port'),() => {
          console.log('Server on port'+ this.app.get('port'));
        });
    }
}

export default Application