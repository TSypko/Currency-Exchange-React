import React, { useState, useEffect } from 'react';
import CurrencySelector from "./FormField/CurrencySelector"
import FormField from "./FormField"
import ResultField from "./FormField/ResultField"
import { countries } from '../utils/countries';
import Amount from './FormField/Amount';
import {
    FormContainer,
    Fieldset,
    Legend,
    InputWrapper,
    FlagWrapper,
    FlagImage,
    FetchMessage
} from "./styled";
import { useFetch } from "./useFetch";
import Loading from "./Loading";
import MuiAlert from '@material-ui/lab/Alert';

const Form = () => {

    const rateData = useFetch("https://api.exchangeratesapi.io/latest?base=PLN");

    useEffect(() => {
        setCurrencies(countries.map(
            (currency) => ({
                ...currency,
                rate: rateData.content?.rates[currency.shortname]
            })));
        setRateDate(rateData.content?.date);
    }, [rateData.content]);

    const [currencies, setCurrencies] = useState(countries);
    const [rateDate, setRateDate] = useState("");

    const [currencyFromName, setCurrencyFromName] = useState("Euro");
    const onSelectCurrencyFromChange = ({ target }) => setCurrencyFromName(target.value);

    const [currencyToName, setCurrencyToName] = useState("Polish Zloty");
    const onSelectCurrencyToChange = ({ target }) => setCurrencyToName(target.value);

    const [amount, setAmount] = useState("");
    const onAmountChange = ({ target }) => setAmount(+target.value);

    const currencyFrom = currencies.find(({ name }) => name === currencyFromName);
    const currencyTo = currencies.find(({ name }) => name === currencyToName);

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    const result = amount * currencyTo.rate / currencyFrom.rate;

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>
                    Converter
                </Legend>
                {!rateData.content
                    ? (
                        <>
                            {rateData.loading
                                ? <MuiAlert elevation={6} variant="filled" severity="info">
                                    Loading...
                                          </MuiAlert>
                                : rateData.error = <MuiAlert elevation={6} variant="filled" severity="error">
                                    "Unable receive data. Try again later"
                                           </MuiAlert>
                            }
                            <FetchMessage>
                                {rateData.loading && <Loading />}
                            </FetchMessage >
                        </>
                    )
                    :
                    <>
                        <InputWrapper>

                            <FormField
                                body=
                                {
                                    <CurrencySelector
                                        labelText="From"
                                        value={currencyFromName}
                                        onChange={onSelectCurrencyFromChange}
                                    />
                                }
                            />
                            <FlagWrapper>
                                <FlagImage
                                    src={currencyFrom.flagImage}
                                    alt={`Flag of ${currencyFrom.country}`}
                                />
                            </FlagWrapper>
                            <FormField
                                body=
                                {
                                    <CurrencySelector
                                        labelText="To"
                                        value={currencyToName}
                                        onChange={onSelectCurrencyToChange}
                                    />
                                }
                            />
                            <FlagWrapper>
                                <FlagImage
                                    src={currencyTo.flagImage}
                                    alt={`Flag of ${currencyTo.country}`}
                                />
                            </FlagWrapper>
                            <FormField
                                body=
                                {
                                    <Amount
                                        value={amount}
                                        onChange={onAmountChange}
                                    />
                                }
                            />
                        </InputWrapper>
                        <FormField
                            type={"result"}
                            body=
                            {
                                <ResultField
                                    result={result}
                                    LCID={currencyTo.LCID}
                                    currencyToName={currencyTo.shortname}
                                    amount={amount}
                                    rateDate={rateDate}
                                />
                            }
                        />
                    </>
                }
            </Fieldset>
        </FormContainer>
    )
}

export default Form;