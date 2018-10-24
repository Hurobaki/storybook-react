import React, { Component, Fragment } from "react";
import { FormFACC } from "forms-binding-react";
import { InputForm } from "../components/InputForm";
import Button from "@material-ui/core/Button";
import {
    addNamePredicate,
    isEmail,
    isPasswordEqual
} from "../validators/FormPage.validators";

const formPredicates = fields => {
    return [
        {
            name: "samePassword",
            validator: isPasswordEqual
        }
    ];
};

class FormPageDynamicComponent extends Component {
    render() {
        return (
            <div>
                <div>Form page dynamic</div>
                <FormFACC isDynamic={true} formPredicates={formPredicates}>
                    {({
                          handleChange,
                          handleSubmit,
                          addPredicate,
                          fields: { username, email, password, confirmPassword },
                          errors,
                          formValid,
                          isClicked
                      }) => (
                        <Fragment>
                            <form
                                onSubmit={handleSubmit}
                                style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <InputForm
                                    type="text"
                                    name="username"
                                    value={username}
                                    labelTitle="Username"
                                    error={errors.username}
                                    handleChange={handleChange}
                                    setPredicate={addPredicate("username", addNamePredicate)}
                                />
                                <InputForm
                                    type="email"
                                    name="email"
                                    value={email}
                                    labelTitle="Email"
                                    error={errors.email}
                                    handleChange={handleChange}
                                    setPredicate={addPredicate("email", isEmail)}
                                />
                                <InputForm
                                    type="password"
                                    name="password"
                                    value={password}
                                    labelTitle="Password"
                                    handleChange={handleChange}
                                />
                                <InputForm
                                    type="password"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    labelTitle="Re-Type"
                                    error={errors.samePassword}
                                    handleChange={handleChange}
                                />
                                <Button
                                    type="submit"
                                    color="primary"
                                    disabled={!formValid}
                                    style={{ alignSelf: "flex-start", margin: "10px" }}
                                >
                                    Submit
                                </Button>
                            </form>
                        </Fragment>
                    )}
                </FormFACC>
            </div>
        );
    }
}

export const FormPageDynamic = FormPageDynamicComponent;
