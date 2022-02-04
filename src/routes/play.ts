import {Router,Request,Response} from 'express';
import Machine from '../classes/machine';

const router = Router();

router.route('/create')
    .get((req:Request,res:Response) => {
        
        const machine = new Machine();
        
        machine.play();

        let num1 = machine.getFirstValue();
        let num2 = machine.getSecondValue();
        let num3 = machine.getThirdValue();
        let award = machine.getAward();
        let winType = machine.getWinType();

        var luckyValues = [
            { val1: num1, val2: num2 , val3:num3, bonus:award, winType: winType }
        ];
       
        res.render('play/create', {values:luckyValues});

    })

export default router;