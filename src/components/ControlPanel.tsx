import { Button } from 'react-bootstrap';
import { Die } from '../interfaces/die';
import { roll } from '../utilities/data';

export function ControlPanel ({dieInUse, rolled}:
    {
        dieInUse: (d: Die) => void,
        rolled: number
    }): JSX.Element {
    const hun
}