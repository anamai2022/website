import Vue from "vue";
export const form = {
    QuestionnaireId:null,
    QuestionnaireHeader:null,
    QuestionnaireName:null,
    QuestionnaireNickname:null,
    QuestionnaireDescription:null,
    QuestionnaireRemark:null,
    Url:null,
    StartDate: new Date(),
    EndDate: new Date(),
    IsActive: false,
    IsPublish: false,
    CountQuestion: 0,
};

export const StepForm = {
    CountQuestion: 0,
    Questions:[],
};

export const Questions = {
    QuestionId: null,
    QuestionSeq: null,
    QuestionName: null,
    QuestionRemark: null,
    QuestionDescription: null,
    QuestionLevel: 0,
    QuestionAttribute: null,
    QuestionSkipSeq: null,
    QuestionShow: false,
    Answers: [],
};

export const Answers = {
    CountAnswers: 0,
    QuestionAnswer:[],
};

export const QuestionAnswer = {
    AnswerId: null,
    AnswerSeq: 0,
    AnswersName: null,
    AnswerDescription: null,
    AnswerRemark: null,
    AnswerLevel: 0,
    AnswerSeqId: null,
    AnswerCategoryId: null,
    AnswerFormat: null,
    AnswerShow: false,
    AnswerAttribute:[],
};

export const AnswerAttribute = {
    inputType: null,
    inputValue: null,
    inputPlaceholder: null,
    inputMax: 0,
    inputMin: 0,
};