<template>
  <div class="profile-editor">
    <div class="profile-header">
      <h2>{{ user.isVolunteer ? 'Volunteer' : 'Student' }} Profile</h2>
    </div>

    <div
      v-if="error"
      class="alert alert-danger"
      role="alert">{{ error }}</div>

    <div class="row form-group">
      <p>GPA</p>
      <div class="row">
        <div class="col-sm-12">
          <input
            v-model="user.gpa"
            type="text"
            class="form-control"
            required
            autofocus>
        </div>
      </div>
    </div>

    <div class="row form-group">
      <p>Please list all colleges and universities you are considering apply to.</p>
      <div class="row">
        <div class="col-sm-12">
          <textarea
            v-model="user.collegeApplicationsText"
            class="form-control"/>
        </div>
      </div>
    </div>

    <div class="row form-group">
      <p>Common College Documents Checklist</p>
      <p class="sub">Please check all that you have currently completed or obtained</p>
      <div class="row">
        <div class="col-sm-6">
          <div class="checkbox">
            <label>
              <input
                v-model="user.commonCollegeDocs"
                type="checkbox"
                value="highschoolTranscript">
              High School Transcript
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input
                v-model="user.commonCollegeDocs"
                type="checkbox"
                value="commonApplication">
              Common Application
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input
                v-model="user.commonCollegeDocs"
                type="checkbox"
                value="personalStatement">
              Personal Statement
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input
                v-model="user.commonCollegeDocs"
                type="checkbox"
                value="resume">
              Resume
            </label>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="checkbox">
            <label>
              <input
                v-model="user.commonCollegeDocs"
                type="checkbox"
                value="testScores">
              SAT / ACT Scores
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input
                v-model="user.commonCollegeDocs"
                type="checkbox"
                value="lettersRecommendation">
              Letters of Recommendation
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input
                v-model="user.commonCollegeDocs"
                type="checkbox"
                value="fafsa">
              FAFSA
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input
                v-model="user.commonCollegeDocs"
                type="checkbox"
                value="finAidProfile">
              CSS / Financial Aid Profile
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row form-group">
      <p>Academic Interests</p>
      <p class="sub">Please tell us about your interests! For example, your favorite class, a new topic you want to study, a cause you are passionate about, a professional hobby, an intended major/minor, etc.</p>
      <div class="row">
        <div class="col-sm-12">
          <textarea
            v-model="user.academicInterestsText"
            class="form-control"/>
        </div>
      </div>
    </div>

    <div class="row form-group">
      <p>Please list all your SAT and/or ACT Scores &amp; when they were taken</p>
      <div class="row">
        <div class="col-sm-12">
          <textarea
            v-model="user.testScoresText"
            class="form-control"/>
        </div>
      </div>
    </div>

    <div class="row form-group">
      <p>Have you taken any advanced (honors, AP, IB, college-level) courses? If so, please list them and your AP exam scores if applicable</p>
      <div class="row">
        <div class="col-sm-12">
          <textarea
            v-model="user.advancedCoursesText"
            class="form-control"/>
        </div>
      </div>
    </div>

    <div class="row form-group">
      <p>What extracurricular activities are you involved in at high school?</p>
      <div class="row">
        <div class="col-sm-12">
          <textarea
            v-model="user.extracurricularActivitesText"
            class="form-control"/>
        </div>
      </div>
    </div>

    <button
      class="btn btn-lg btn-primary btn-block back"
      @click.prevent="back">Back</button>
    <button
      class="btn btn-lg btn-primary btn-block next"
      type="submit"
      @click.prevent="submitProfile">{{ buttonMsg }}</button>
  </div>
</template>

<script>
import UserService from 'src/services/UserService';

export default {
  data() {
    return {
      user: UserService.getUser(),
      buttonMsg: 'Next',
      error: '',
    };
  },
  methods: {
    skipOnboarding() {
      this.$router.push('/');
    },
    back() {
      this.$router.push('/onboarding/academic');
    },
    submitProfile() {
      this.buttonMsg = 'Updating...';
      UserService.setProfile(this, this.user, '/');
    },
  },
};
</script>

<style scoped>
.profile-header {
  height: 100px;
  margin: 0;
  background-color: #1855D1;
  padding-left: 30px;
  margin-bottom: 50px;
}

h2 {
  color: white;
  font-size: 24px;
  text-align: left;
  font-weight: 600;
  line-height: 100px;
  margin: 0;
}

p {
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  color: #343440;
  margin-bottom: 0;
}

p.sub {
  font-size: 12px;
  font-weight: 300;
  color: #73737A;
}

.form-group {
  margin: 0;
  padding-left: 50px;
  max-width: 650px;
  margin-bottom: 50px;
}

.form-control {
  margin-top: 20px;
  border: none;
  box-shadow: none;
  border-radius: 0;
}

label {
  display: block;
  text-align: left;
  font-size: 12px;
  font-weight: 300;
  color: #343440;
}

.form-control {
  border-bottom: 3px solid black;
  margin-bottom: 10px;
}

.form-control:focus {
  border-bottom: 3px solid black;
  box-shadow: none;
}

.checkbox label {
  font-size: 16px;
}

textarea.form-control {
  width: 100%;
  height: 100px;
  border: 1px solid #343440;
  font-weight: 300;
  color: #333333;
}

textarea.form-control:focus {
  border: 1px solid #343440;
}

.btn {
  width: 190px;
  background-color: #16D2AA;
  border: none;
  font-weight: 600;
  margin-left: 50px;
}

.btn.skip {
  width: 250px;
  margin: 0 auto;
}

.btn.back {
  float: left;
}

.btn.next {
  float: right;
  margin-right: 50px;
}
</style>
