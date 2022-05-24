import { useState } from "react";
import styles from "./TipCalculator.module.scss";
import logo from "./images/logo.svg";

const TipCalculator = () => {
  const [bill, setBill] = useState();
  const [tip, setTip] = useState();
  const [numPeople, setNumPeople] = useState();
  return (
    <div className={styles.body}>
      <img className={styles.logo} src={logo} />
      <article>
        <div className={styles.inputContainer}>
          <Input icon="dollar" header="Bill" value={bill} setValue={setBill} />
          <TipButtons value={tip} setValue={setTip} />
          <Input
            icon="person"
            header="Number of People"
            value={numPeople}
            setValue={setNumPeople}
          />
        </div>
        <div className={styles.outputContainer}>
          <Output
            bill={bill}
            tip={tip}
            numPeople={numPeople}
            setBill={setBill}
            setTip={setTip}
            setNumPeople={setNumPeople}
          />
        </div>
      </article>
    </div>
  );
};

const Input = ({ icon, header, value, setValue }) => {
  const change = (e) => {
    setValue(e.target.value);
  };

  const style = icon == "dollar" ? styles.billInput : styles.numPeopleInput;

  return (
    <div className={style}>
      <p>{header}</p>
      <div className={styles.textFieldContainer}>
        <input value={value} onChange={change} type="text" placeholder="0" />
      </div>
    </div>
  );
};

const TipButtons = ({ value, setValue }) => {
  const change = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.tipSelection}>
      <p>Select Tip %</p>
      <div className={styles.tipContainer}>
        <button onClick={() => setValue(5)}>5%</button>
        <button onClick={() => setValue(10)}>10%</button>
        <button onClick={() => setValue(15)}>15%</button>
        <button onClick={() => setValue(25)}>25%</button>
        <button onClick={() => setValue(50)}>50%</button>
        <input value={value} onChange={change} placeholder="Custom" />
      </div>
    </div>
  );
};

const Output = ({ bill, tip, numPeople, setBill, setTip, setNumPeople }) => {
  const calculateTip = () => {
    if (!(bill && tip && numPeople)) return (0).toFixed(2);
    return ((bill * (tip / 100)) / numPeople).toFixed(2);
  };

  const calculateTotal = () => {
    if (!(bill && tip && numPeople)) return (0).toFixed(2);
    const billPerPerson = Number(bill / numPeople);
    const tipPerPerson = Number(calculateTip());
    return (billPerPerson + tipPerPerson).toFixed(2);
  };

  const reset = () => {
    setBill("");
    setTip("");
    setNumPeople("");
  };
  return (
    <>
      <div className={styles.output}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <p>Tip Amount</p>
            <p>/ person</p>
          </div>
          <p className={styles.cost}>${calculateTip()}</p>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <p>Total</p>
            <p>/ person</p>
          </div>
          <p className={styles.cost}>${calculateTotal()}</p>
        </div>
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default TipCalculator;
