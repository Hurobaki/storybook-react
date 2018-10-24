import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FormPageDynamic } from '../src/pages/PageDynamic';

storiesOf('Button', module)
    .add('with text', () => <button onClick={action('clicked')}>Hello Button</button>)
    .add('with some emoji', () => (
        <button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </button>
    ))
    .add('Form Page Dynamic', () => <FormPageDynamic />);
