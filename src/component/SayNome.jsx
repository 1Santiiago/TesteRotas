import React from 'react';
import styles from './saynome.module.css'
const SayNome = (props) => {
    return ( <>
            <p className={styles.sayNomeFrase}>
                Olá {props.nome}, tudo bem?
            </p>
    </> );
}
 
export default SayNome;