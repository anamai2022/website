<template>
  <section class="section bg-white top" id="cardSocial">
    <div class="container">
        <h4>{{informationHeader}}</h4>
        <div class="row">
            <div class="col-lg-6" v-for="(items,index) in DataSet" :key="index">
                <b-card no-body>
                    <b-row no-gutters class="align-items-center">
                        <b-col md="4">
                            <b-card-img :src="items.img" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="8">
                            <b-card-body :title="items.title">
                                <b-card-text>{{items.subtitle}}</b-card-text>
                                <p class="card-text">
                                    <small class="text-muted"><a v-bind:href="items.url" class="card-link text-custom">{{clickLink}}</a></small>                                
                                </p>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
    </div>
  </section>
</template>
<script>
import CardSocialData from "@/data/CardSocial.json";
import appConfig from "@/app.config";
export default {
  name: "CardSocial",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      DataSet: CardSocialData,
      informationHeader: appConfig.informationHeader,
      informationDetail: appConfig.informationDetail,
      linkeHome: appConfig.linkeHome,
      clickLink: appConfig.clickLink,
    };
  },
mounted() {},
};
</script>
<style scoped>
.top {
  margin-top: 40px;
}
</style>