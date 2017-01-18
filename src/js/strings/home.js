/* eslint-disable */

export default {
    notes: {
        name: `The field name that appears in the error messages is usually the input's <code>name</code> attribute, unless you used the fallbacks like <code>data-vv-name</code> otherwise the field might not get registered correctly.`,
    },
    other: {
        moreExamples: 'More Examples',
    },
    sections: {
        intro: {
            description: `This is a lightweight plugin for <a href="https://vuejs.org/" class="link">Vue.js</a> that allows you to validate input fields, and display errors.
                <br><br>
                You don't have to do anything fancy in your app, most of the work goes into the html.
                You only need to specify for each input what kind of validators should be used when the value changes. You will then get informed of the errors for each field.
                <br><br>
                Although most of the validations occur automatically, you can use the validator however you see fit. The validator object has no dependencies and is a standalone object.
                <br><br>
                Currently there are over 20 validation rules available in the plugin.
                This plugin is inspired by <a href="https://laravel.com/" class="link">PHP Framework Laravel's validation syntax</a>.
                <br><br>It also supports Vue 2.0. All examples here are built using Vue 2.0 with the plugin.`
        },
        install: {
            title: 'Installation',
            description: `You can install this plugin via <a class="link" href="#npm">npm</a> or <a class="link" href="#bower">bower</a> or via a <a class="link" href="#cdn">CDN</a>.`,
            cdn: `Head over to <a href="https://www.jsdelivr.com/projects/vee-validate" target="jsdelivr">jsdelivr</a> and grab the latest version.`,
            step: 'Then you may use it like this:',
            comment: 'good to go.',
            es6: 'or you may import it using ES6:'
        },
        example: {
            title: 'Basic Example',
            description: `All you need is to add the <code class="inline">v-validate</code> directive to the input you wish to validate.
            <br><br>
            Then add a <code class="inline">data-vv-rules</code> attribute which contains a list of validation rules separated by a pipe '<code class="inline">|</code>'.
            For the following example the validation rules are straight forward, use <code class="inline">required</code> to indicate that the field is required.
            And <code class="inline">email</code> to indicate that the field must be an email.
            To combine both rules we assign the value <code class="inline">required|email</code> to the <code class="inline">data-vv-rules</code> data-vv-set attribute.`
        },
        render: {
            title: 'Rendering Errors', 
            description: `Naturally, you would want to display the errors to your users. The plugin augments your Vue instance with a private validator object and a public errors data object.
                          You are responsible for how the errors should be rendered.
                          <br><br>The errors object exposes a simple methods to help you render errors:`,
            api: {
                first: 'Fetches the first error message associated with that field.',
                collect: 'Fetches all error messages associated with that field. alternativly you can pass nothing and it will return errors grouped by fields.',
                has: 'Checks if there are any errors associated with that field.',
                all: 'Gets all error messages.',
                any: 'Checks if there are any errors.'
            },
            parts: [
                'There are a few more',
                'methods',
                'that you can use to manipulate the errors object.'
            ]
            
        },
        rules: {
            title: 'Available Rules',
            description: 'There are more than 20 rules available to validate your inputs:',
        },
        config: {
            title: 'Configuration',
            description: `You may need to configure some options to tweak some of the plugin internals, this is not required, but could cause conflicts. For example: if you are using a property called <code class="inline">errors</code> on your vue instance this may cause conflicts.
                Here is how you would set up the options along with the default values:`,
            comment: 'change if property conflicts.',
            api: {
                errorBag: "The name of the ErrorBag object that will be injected in each of Vue's instances' data.",
                fieldsBag: 'The name of the FieldBag object that will be injected All Vue instances.',
                delay: 'The default debounce time for all inputs (only affects validations).',
                locale: 'The default language for the validation messages.',
                strict: 'Fields that have no rules will fail validation unless strict is set to false.'
            }
        },
    }
};