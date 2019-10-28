const punchlines = require('../punchlines.json');

module.exports = function fight (pj, pnj, pjAttq) {

    function bestAttak(pnj) {

        let a = {
            id: 0,
            damages: 0,
            mana: 100
        };

        for (let i = 0; i < pnj.hand.length; i++) {
            const atk = punchlines[pnj.hand[i]];

            if (atk.damages >= a.damages && pnj.mana >= atk.cost) {

                if (atk.damages == a.damages) {
                    if (atk.cost < a.mana) {
                        a.id = pnj.hand[i];
                        a.damages = atk.damages;
                        a.mana = atk.cost;
                    }
                }

                else {
                    a.id = pnj.hand[i];
                    a.damages = atk.damages;
                    a.mana = atk.cost;
                }
            }
        }
        return a.id;
    }

    function bestBalance(pnj) {

        let a = {
            id: 0,
            damages: 0,
            mana: 100
        }

        for (let i = 0; i < pnj.hand.lenght; i++) {
            const atk = punchlines[pnj.hand[i]];

            if (atk.damages - atk.cost > a.damages - a.mana && pnj.mana >= atk.cost) {
                if (atk.damages - atk.mana == a.damages - a.mana) {
                    if (atk.damages > a.damages) {
                        a.id = pnj.hand[i];
                        a.damages = atk.damages;
                        a.mana = atk.cost;
                    }

                    else {
                        a.id = pnj.hand[i];
                        a.damages = atk.damages;
                        a.mana = atk.cost;
                    }
                }
            }
        }

        return a.id;
    }

    function nullBalance(pnj) {

        let a = {
            id: 0,
            damages: 0,
            mana: 100
        }

        for (let i = 0; i < pnj.hand.lenght; i++) {
            const atk = punchlines[pnj.hand[i]];

            if (atk.damages - atk.cost >= a.damages - a.mana && pnj.mana >= atk.cost) {
                if (atk.damages - atk.cost == a.damages - a.mana) {
                    if (atk.damages > a.damages) {
                        a.id = pnj.hand[i];
                        a.damages = atk.damages;
                        a.mana = atk.cost;
                    }

                    else {
                        a.id = pnj.hand[i];
                        a.damages = atk.damages;
                        a.mana = atk.cost;
                    }
                }
            }
        }

        return a.id;
    }

    function processType(att, cible) {
        switch (att.type) {
            case 'ta mere':
                switch (cible.type) {
                    case 'ta mere':
                        break;

                    case 'raciste':
                        break;

                    case 'wtf':
                        att.damages *= 2;
                        break;

                    case 'cul':
                        att.damages *= 0.5;
                        break;

                    default:
                        break;
                }
                break;

            case 'raciste':
                switch (cible.type) {
                    case 'ta mere':
                        break;

                    case 'raciste':
                        break;

                    case 'wtf':
                        att.damages *= 0.5;
                        break;

                    case 'cul':
                        att.damages *= 2;
                        break;

                    default:
                        break;
                }
                break;

            case 'wtf':
                switch (cible.type) {
                    case 'ta mere':
                        att.damages *= 0.5;
                        break;

                    case 'raciste':
                        att.damages *= 2;
                        break;

                    case 'wtf':
                        break;

                    case 'cul':
                        break;

                    default:
                        break;
                }
                break;

            case 'cul':
                switch (cible.type) {
                    case 'ta mere':
                        att.damages *= 2;
                        break;

                    case 'raciste':
                        att.damages *= 0.5;
                        break;

                    case 'wtf':
                        break;

                    case 'cul':
                        break;

                    default:
                        break;
                }
                break;

            default:
                break;
        }

        return att;
    }

    function processFight(pj, pnj, pjAttq, pnjAttq) {
        pjAttq = punchlines[pjAttq];
        pnjAttq = punchlines[pnjAttq];

        pjAttq = processType(pjAttq, pnj);
        pnjAttq = processType(pnjAttq, pj);

        pj.mana -= pjAttq.cost;
        pnj.mana -= pnjAttq.cost;

        pj.pv -= pnjAttq.damages;
        pnj.pv -= pjAttq.damages;



        return {
            pj: pj,
            pnj: pnj,
            pnjAttq: pnjAttq
        }
    }

    function doFight(pj, pnj, pjAttq) {

        const minBalance = 5;

        const balance = pnj.mana - pj.pv;
        let pnjAttq;

        if (balance < 0) {
            pnjAttq = bestBalance(pnj);

        }

        else if (balance >= minBalance) {
            pnjAttq = bestAttak(pnj);

        }

        if (pnjAttq == 0) {
            pnjAttq = nullBalance(pnj);

        }

        if (pnjAttq == 0) {
            return 1;
        }

        let b = processFight(pj, pnj, pjAttq, pnjAttq);

        return {
            pj: b.pj,
            pnj: b.pnj,
            attId: b.pnjAttq
        }
    }

    return doFight (pj, pnj, pjAttq);
}