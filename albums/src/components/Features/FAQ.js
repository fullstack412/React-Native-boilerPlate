import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection } from '../common';


class FAQ extends Component {
  state = {
    QA: [
      ['Question: What is RBK ?', 'Answer: RBK is a career accelerator producing high quality software engineers. We do in 4 months what most universities cannot do in 4 years.'],
      ['Question: How long is the training?', 'Answer: The training is 2 phases: A 4-week preparatory phase followed by a 12-week immersive phase.'],
      ['Question: What are the requirements and conditions for joining the program?', 'Answer: 1:The applicant must be willing to commit full time – up to 16 hours a day, 6 days a week for the full 18 weeks. 2: The applicant must be at level B2 or above. To test your level, go HERE'],
      ['Question: Is the program free?', 'Answer: No. Tuition should be settled upfront prior to the beginning of the Program. But RBK strives to provide Scholarships for the most vulnerable students by working with local and international donors: those with low family income, refugees and females in particular. Although they are not guaranteed, almost half of our graduates from vulnerable sectors have been lucky to receive scholarships.'],
      ['Question: Is the Prep (Phase I) free ?', 'Answer: Attending the Prep which is the final phase of the selection process costs JoD 200. This fee is refundable to applicants who do not pass this stage. If you leave on your own accord, or if you break any of the rules, then this fee will not refunded. If you pass the Prep, the JoD 200 fee will be applied towards your tuition.'],
      ['Question: What is the cost of the program?', 'Answer: Tuition is currently 5,700 JD and is payable upfront prior to beginning to Immersive Course'],
      ['Question: Is the job guaranteed?', 'Answer: RBK currently enjoys 98% placement rate of its graduates. RBK has relationships with over 30 local hiring partners. RBK graduates have been hired by Souq.com, Arabia Weather, Mixed Dimensions, Expedia, Optimiza, Codacity, ReserveOut, Edura, Edraak, Britecore and others. RBK focuses on placing graduates locally in Jordan.'],
      ['Question: I can’t afford to pay the tuition but I really want to join the Program', 'Answer: RBK is the first in the Arab World that facilitates loans with recognized banks for serious students who want to change their lives. No securities or collateral. All you need is our recommendation. Depending on how you select your loan structure, you can start paying back your loan 9 months AFTER you graduate ! Yes. 9 months AFTER graduation.'],
      ['Question: Is RBK the same as ReBootKamp?', 'Answer: Yes. We are the first code bootcamp in the Arab world. Silicon Valley based Hack Reactor, the leading code bootcamp in the States, is a cofounding partner and provides the curriculum.'],
      ['Question: What kind of student support does RBK offer?', 'Answer: During Phase 2, RBK provides 2 meals a day, local transportation (Greater Amman area) and housing for those living outside of the Greater Amman area. Housing is limited and only available to those living outside Amman. It is available on a first come, first serve basis. RBK does not provide stipends to students.'],
      ['Question: What are the education requirements required for admission?', 'Answer: NONE!. RBK will accept anyone regardless of their educational background. This includes students without a Baccalaureate degree. Applicants are not required to have a Tawjihi. However, you are required to pas our Admissions tests and assignments.'],
      ['Question: What is the training specifically?', 'Answer: RBK imparts essential skill technical and non-technical skills demanded by industry. Technical skills include: Javascript and associated frameworks including MongoDB, Express, Angular, NodeJS, Backbone, React and HTML/CSS Non-technical skills include: soft skills (communication, collaboration, ethics, professionalism), autonomous (self) learning skills, problem solving skills and critical thinking skills. An important dividend of the training is English fluency.'],
      ['Question: Does RBK issue a certificate?', 'Answer: No. Students exit the program with something far more valuable and universally valued – a GitHub repository. This is a cloud based portfolio of projects that demonstrate the graduate’s actual ability to code.'],
      ['Question: How do I register?', 'Answer: Go to RBK.org and hit the apply button located at the top right of the page. You must complete the application (name, e-mail, phone number) and you must take into account that you will receive an email or text message with the personal test, which you must complete. Upon passing the second stage and evaluation of the test, an interview is scheduled. Contact is made by email or text messages including acceptance into the Program.'],
      ['Question: When will the next class start?', 'Answer: The start date for the next cohort is undetermined. Applicants will be notified subsequent to their acceptance.'],
      ['Question: What are the training hours?', 'Answer: Phase 1: 9 hours a day (from 8 am to 6 pm) 6 days per week for 4 weeks. Phase 2: 12-16 hours per day (from 8 am to 9 pm+), 6 days per week for 12 weeks. There is a one week break between Phase 1 and Phase 2. Phase 2 is divided into a 6 week junior period and a 6 week senior period separated by a one week period where students work off-site.']  
    ]
  }

  mapOutFAQ() {
    return this.state.QA.map(element => (
      <CardSection key = {element[0]}>
        <Text style={{fontWeight:'bold'}}>
          {element[0]}{"\n"}{"\n"}
          <Text style={{fontWeight:'normal'}}>
            {element[1]}
          </Text>
        </Text>
      </CardSection>
    ))
  }
  
  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle } = Styles;
    
    return (
      <Card>
        <CardSection>
          <Text style={{fontWeight:'bold'}}>
            FAQs (Frequently Asked Questions)
          </Text>
        </CardSection>
        {this.mapOutFAQ()}
      </Card>
    );
  }
}

const Styles = StyleSheet.create({
  headerConetentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 30
  },
  thumbnailStyle: {
    height: 46,
    width: 46
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  }
});
export default FAQ;