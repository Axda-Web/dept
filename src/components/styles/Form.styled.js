import styled from 'styled-components'

const StyledForm = styled.section`
    background-color: #fff;
    color: #000;
    padding: 3em 2.25em;

    .form-heading {
        font-weight: 300;
        font-size: 1.625rem;
    }

    input, textarea {
        display: block;
        width: 100%;
        border: none;
        border-bottom: 1px solid #DDD;
        resize: none;

        &.invalid {
        border-bottom: 1px solid #D9534F;
        }
    }

    .form__name, .form__email, .form__message {
        margin-top: 2.375em;
    }

    label {
        display: block;
        margin-bottom: 1em;
    }

    input, textarea {
        font-size: 1.125rem;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }

    .form__btn {
        width: 90%;
        margin: 0 auto;
        margin-top: 2.375em;
        font-size: 1.125rem;
        background-color: inherit;
        border: 1px solid black;
        padding: 1em 1.5em;
        border-radius: 50px;
        transition: background-color .3s;

        &:hover {
            color: #fff;
            background-color: #000;
        }
    }

    .form__error-message {
        color: #D9534F;
        margin-top: .75em;
    }

    .form__success-message {
        margin-top: 2em;
        color: #5CB85C;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 5px;
    }

    @media (min-width: 768px) {
        display: grid;
        column-gap: 2em;
        grid-template-columns: 1fr 2fr;

        .form-heading {
            font-size: 2.125rem;
            max-width: 400px;
            line-height: 1.5;
        }

        .form {
            display: grid; 
            grid-template-columns: repeat(2, 1fr);
            gap: 0 10px;
            grid-template-areas:    'name email'
                                    'message message'
                                    'btn .';

            &__name, &__email {
                margin-top: 0;
            }
            
            &__name {
                grid-area: name;
            }

            &__email {
                grid-area: email;
            }

            &__message {
                grid-area: message;
            }

            &__btn {
                grid-area: btn;
                width: 200px;
                padding: .8em 1.2em;
            }
            
        }
    }

    @media (min-width: 992px) {
        .form {
            width: 80%;
            grid-template-areas:    'name email'
                                    'message .'
                                    'btn .';

            &__btn {
                margin-left: 0;
            }
        }
    }

    @media (min-width: 1200px) {
        .form-heading {
            font-size: 3rem;
        }

        .form {
            label {
                font-size: 1.125rem;
            }
        }
    }

`

export default StyledForm