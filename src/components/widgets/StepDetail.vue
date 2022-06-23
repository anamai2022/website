<template>
  <section class="bg-white ex1" id="stepDetail">
    <div class="ex1" v-for="(value, index) in SetData.length" :key="index">
      <span><b>{{ SetData[index].StepTitle }}</b></span>
      <div class="ex1" v-for="(value, a) in SetData[index].Questions" :key="a">
        {{ value.QuestionSeq }}&nbsp;&nbsp;:&nbsp;&nbsp;{{ value.QuestionName }}
        <div v-for="(values, i) in value.Answers.QuestionAnswer" :key="i">
        <div  v-if="values.AnswerLevel === 0 ">
          <div class="ex1" v-if="values.AnswerCategoryId === 'checkbox' && values.AnswerShow == true">
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
            {{ values.AnswersName }}
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'text' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              value=""
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'textarea' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <textarea
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              value=""
              :placeholder="values.AnswerPlaceholder"
              rows="4" cols="50"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'date' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'email' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'file' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'image' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'number' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'password' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'radio' && values.AnswerShow == true">
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
            {{ values.AnswersName }}
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'url' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'tel' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerAttribute != null">
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'checkbox' && values.AnswerShow == true"
            >
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
              {{ values.AnswersName }}
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'text' && values.AnswerShow == true">
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                value=""
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'textarea' && values.AnswerShow == true"
            >
              <textarea
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                value=""
                :placeholder="values.AnswerPlaceholder"
                rows="4" cols="50"
              />
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'date' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'email' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'file' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'image' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'number' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'password' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'radio' && values.AnswerShow == true"
            >
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
              {{ values.AnswersName }}
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'url' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'tel' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
          </div>
        </div>
        <div class="ex1" v-if="values.AnswerLevel === 1">
          <div class="ex1" v-if="values.AnswerCategoryId === 'checkbox' && values.AnswerShow == true">
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
            {{ values.AnswersName }}
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'text' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              value=""
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'textarea' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <textarea
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              value=""
              :placeholder="values.AnswerPlaceholder"
              rows="4" cols="50"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'date' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'email' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'file' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'image' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'number' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'password' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'radio' && values.AnswerShow == true">
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
            {{ values.AnswersName }}
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'url' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'tel' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerAttribute != null">
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'checkbox' && values.AnswerShow == true"
            >
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
              {{ values.AnswersName }}
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'text' && values.AnswerShow == true">
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                value=""
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'textarea' && values.AnswerShow == true"
            >
              <textarea
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                value=""
                :placeholder="values.AnswerPlaceholder"
                rows="4" cols="50"
              />
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'date' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'email' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'file' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'image' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'number' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'password' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'radio' && values.AnswerShow == true"
            >
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
              {{ values.AnswersName }}
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'url' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'tel' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
          </div>
        </div>
        <div class="ex2" v-if="values.AnswerLevel === 2">
          <div class="ex1" v-if="values.AnswerCategoryId === 'checkbox' && values.AnswerShow == true">
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
            {{ values.AnswersName }}
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'text' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              value=""
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'textarea' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <textarea
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              value=""
              :placeholder="values.AnswerPlaceholder"
              rows="4" cols="50"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'date' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'email' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'file' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'image' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'number' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'password' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'radio' && values.AnswerShow == true">
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
            {{ values.AnswersName }}
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'url' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'tel' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerAttribute != null">
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'checkbox' && values.AnswerShow == true"
            >
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
              {{ values.AnswersName }}
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'text' && values.AnswerShow == true">
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                value=""
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'textarea' && values.AnswerShow == true"
            >
              <textarea
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                value=""
                :placeholder="values.AnswerPlaceholder"
                rows="4" cols="50"
              />
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'date' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'email' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'file' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'image' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'number' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'password' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'radio' && values.AnswerShow == true"
            >
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
              {{ values.AnswersName }}
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'url' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'tel' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
          </div>
        </div>
        <div class="ex3" v-if="values.AnswerLevel === 3">
          <div class="ex1" v-if="values.AnswerCategoryId === 'checkbox' && values.AnswerShow == true">
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
            {{ values.AnswersName }}
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'text' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              value=""
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'textarea' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <textarea
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              value=""
              :placeholder="values.AnswerPlaceholder"
              rows="4" cols="50"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'date' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'email' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'file' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'image' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'number' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'password' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'radio' && values.AnswerShow == true">
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
            {{ values.AnswersName }}
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'url' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerCategoryId === 'tel' && values.AnswerShow == true">
            {{ values.AnswersName }}
            <input
              :type="values.AnswerCategoryId"
              :v-bind="values.AnswerId"
              :name="values.AnswerSeq"
              :value="values.AnswerId"
              :placeholder="values.AnswerPlaceholder"
            />
          </div>
          <div class="ex1" v-if="values.AnswerAttribute != null">
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'checkbox' && values.AnswerShow == true"
            >
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
              {{ values.AnswersName }}
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'text' && values.AnswerShow == true">
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                value=""
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'textarea' && values.AnswerShow == true"
            >
              <textarea
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                value=""
                :placeholder="values.AnswerPlaceholder"
                rows="4" cols="50"
              />
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'date' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'email' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'file' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'image' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'number' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'password' && values.AnswerShow == true"
            >
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div
              class="ex1"
              v-if="values.AnswerAttribute.inputType === 'radio' && values.AnswerShow == true"
            >
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
              {{ values.AnswersName }}
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'url' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
            <div class="ex1" v-if="values.AnswerAttribute.inputType === 'tel' && values.AnswerShow == true">
              {{ values.AnswersName }}
              <input
                :type="values.AnswerAttribute.inputType"
                :v-bind="values.AnswerId"
                :name="values.AnswerSeq"
                :value="values.AnswerId"
                :placeholder="values.AnswerPlaceholder"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import appConfig from "@/app.config";
export default {
  name: "StepDetail",
  props: ["form", "mode", "poll"],
  page: {
    title: appConfig.description,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {},
  data() {
    return {
      title: appConfig.description,
      Step1Title: appConfig.Step1Title,
      SetData: this.poll[0].Step,
      StepCount: this.poll[0].CountStep,
      DataSet: null,
    };
  },
  computed: {},
  methods: {
    handleReset() {
      location.reload();
    },
  },
  beforeCreate() {},
  created() {
    console.log('test : ',this.StepCount)
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
<style scoped>
.ex1 {
  margin-left: 20px;
}
.ex2 {
  margin-left: 40px;
}
.ex3 {
  margin-left: 60px;
}
</style>
