<template>
    <div>
        <h2 id="about" class="title is-4"><a href="#about">What is vee-validate?</a></h2>
        <p v-html="strings.sections.intro.description"></p>
        <h2 id="installation" class="title is-4"><a href="#installation">{{ strings.sections.install.title }}</a></h2>
        <p>
            <div v-html="strings.sections.install.description"></div>
            <h2 id="npm" class="title is-4"><a href="#npm">npm</a></h2>
            <b>Vue 1.x</b>
            <code-block class="language-bash">npm install vee-validate@prev --save</code-block>
            <b>Vue 2.x</b>
            <code-block class="language-bash">npm install vee-validate --save</code-block>

            <h2 id="bower" class="title is-4"><a href="#bower">bower</a></h2>
            <b>Vue 1.x</b>
            <code-block class="language-bash">bower install vee-validate#1.0.0-beta.11 --save</code-block>
            <b>Vue 2.x</b>
            <code-block class="language-bash">bower install vee-validate#2.0.0-beta.18 --save</code-block>

            <h2 id="cdn" class="title is-4"><a href="#cdn">CDN</a></h2>
            <p v-html="strings.sections.install.cdn"></p>
            <br>
             {{ strings.sections.install.step }}
            <code-block class="language-html">
                &lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;
                &lt;script src=&quot;path/to/vee-validate.js&quot;&gt;&lt;/script&gt;
                &lt;script&gt;
                    Vue.use(VeeValidate); // {{ strings.sections.install.comment }}
                &lt;/script&gt;
            </code-block>

            {{ strings.sections.install.es6 }}
            <code-block class="language-javascript">
                import Vue from 'vue';
                import VeeValidate from 'vee-validate';

                Vue.use(VeeValidate);
            </code-block>
        </p>
        <h2 id="basic-example" class="title is-4"><a href="#basic-example">{{ strings.sections.example.title }}</a></h2>
        <p v-html="strings.sections.example.description"></p>
        <basic-example></basic-example>
        <div class="flex-center"><router-link class="link" :to="{ name: 'examples' }">{{ strings.other.moreExamples }}</router-link></div>
        <br>
        <note>
            <span v-html="strings.notes.name"></span>
        </note>
        <h2 id="render-errors" class="title is-4"><a href="#render-errors">{{ strings.sections.render.title }}</a></h2>
        <p>
            <div v-html="strings.sections.render.description"></div>
            <ul class="list-circle">
                <li><code class="inline">first('field')</code> {{ strings.sections.render.api.first }}</li>
                <li><code class="inline">collect('field')</code> {{ strings.sections.render.api.collect }}</li>
                <li><code class="inline">has('field')</code> {{ strings.sections.render.api.has }}</li>
                <li><code class="inline">all()</code> {{ strings.sections.render.api.all }} </li>
                <li><code class="inline">any()</code> {{ strings.sections.render.api.any }}</li>
            </ul>
            {{ strings.sections.render.parts[0] }} <router-link class="link" :to="{ name: 'api', hash: '#error-bag'}">{{ strings.sections.render.parts[1] }}</router-link> {{ strings.sections.render.parts[2] }}
        </p>
        <h2 id="available-rules" class="title is-4"><a href="#available-rules">{{ strings.sections.rules.title }}</a></h2>
        <p v-html="strings.sections.rules.description"></p>
        <div class="columns is-multiline">
            <div v-for="group in rules" :class="'column is-' + 12 / rules.length">
                <ul class="list-circle">
                    <li v-for="rule in group"><router-link class="link" :to="{ name: 'rules', hash: '#rule-' + rule }">{{ rule }}</router-link></li>
                </ul>
            </div>
        </div>
        <p>Visit the <router-link class="link" :to="{ name: 'rules', hash: '#available-rules' }">rules documentation</router-link> to learn more about how to use each rule, and how to <router-link :to="{ name: 'rules', hash: '#custom-rules' }" class="link">create your own</router-link>.</p>
        <h2 id="configuration" class="title is-4"><a href="#configuration">{{ strings.sections.config.title }}</a></h2>
        <p>
            {{ strings.sections.config.description }}
        </p>
        <code-block class="language-javascript">
            import Vue from 'vue';
            import VeeValidate from 'vee-validate';

            const config = {
                errorBagName: 'errors', // {{ strings.sections.config.comment }}
                fieldsBagName: 'fields',
                delay: 0,
                locale: 'en',
                dictionary: null,
                strict: true
            };

            Vue.use(VeeValidate, config);
        </code-block>
        <ul class="list-circle">
            <li><code class="inline">errorBagName:</code> {{ strings.sections.config.api.errorBag }}</li>
            <li><code class="inline">fieldsBagName:</code> {{ strings.sections.config.api.fieldsBag }}</li>
            <li><code class="inline">delay:</code> {{ strings.sections.config.api.delay }}</li>
            <li><code class="inline">locale:</code> {{ strings.sections.config.api.locale }}</li>
            <li><code class="inline">dictionary:</code> A dictionary to be merged with the validators dictionary, check <router-link class="link" :to="{ name: 'rules', hash: '#custom-messages' }">custom messages</router-link> and <router-link class="link" :to="{ name: 'localization' }">localization</router-link> sections.</li>
            <li><code class="inline">strict:</code> {{ strings.sections.config.api.strict }}</li>
        </ul>
    </div>
</template>

<script>
import strings from './../strings/home';
import Collection from 'collectionsjs';
import data from './../data.json';
import BasicExample from './../components/examples/Basic.vue';

export default {
    data: () => ({
        rules: new Collection(data.rules).chunk(10).all(),
        strings
    }),
    components: {
        BasicExample
    }
};
</script>
