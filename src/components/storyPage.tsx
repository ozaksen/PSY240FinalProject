import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

interface StorySection {
  id: string;
  content: string;
}
interface Section {
  id: string;
  text: string;
  options: string[];
}
interface Chapter {
  id: string;
  title: string;
  sections: Section[];
}
interface Story {
  id: string;
  content: string;
  options: { target: string; text: string }[];
}

const chapters: Chapter[] = [
  {
    id: 'chapter1',
    title: 'The Hindsight Game',
    sections: [
      {
        id: 'intro',
        text: `Welcome to "The Hindsight Game"! In this game, you'll play the role of a detective who has to solve a mysterious case. But be careful: you'll be facing the dreaded hindsight bias!
                First, let's set the scene. You're investigating a burglary that took place last night at the local convenience store. The thief stole a large amount of cash from the register and some expensive products from the shelves. The security camera footage is blurry, and you don't have any other leads at the moment. It's up to you to figure out what happened!
                As you start investigating, you come across two witnesses who were in the store at the time of the burglary. The first witness, John, tells you that he saw a tall man with a hoodie leaving the store quickly. The second witness, Sarah, tells you that she heard the thief's voice and that it sounded like a woman.
                Now it's time to make a guess: who do you think is more credible, John or Sarah?`,
        options: ['John', 'Sarah'],
      },
      {
        id: 'John',
        text: `You decide to trust John's testimony and start looking for a tall man with a hoodie in the area. After a few hours of searching, you find a suspect who matches the description. You arrest him, and he confesses to the burglary.
                Congratulations, you solved the case! But wait, something doesn't feel right. As you review the case, you realize that you fell victim to hindsight bias. You only believed John's testimony because it confirmed your theory, and you ignored Sarah's testimony because it contradicted it. In reality, Sarah was right: the thief was a woman. You didn't even consider that possibility, and it led you to the wrong conclusion.`,
        options: ["Continue"],
      },
      {
        id: 'Sarah',
        text: `You decide to trust Sarah's testimony and start looking for a woman who might have committed the burglary. After a few hours of searching, you find a suspect who matches the description. You arrest her, but she denies any involvement in the crime.
                As you review the case, you start to doubt your decision. Maybe John was right, and the thief was actually a tall man with a hoodie. You start to question Sarah's testimony and wonder if you made a mistake.
                Congratulations, you've just experienced hindsight bias! Even though Sarah's testimony was correct, you doubted it because it didn't fit your theory. You started to second-guess yourself and almost gave up on your investigation.`,
        options: ["Continue"],
      },
      {
        id: 'Continue',
        text: `Congratulations, you've just experienced hindsight bias! Even though Sarah's testimony was correct, you doubted it because it didn't fit your theory. You started to second-guess yourself and almost gave up on your investigation.
        So there you have it, "The Hindsight Game"! By playing this game, you can see firsthand how hindsight bias can cloud your judgment and lead you to the wrong conclusion. It's important to keep an open mind and consider all possibilities, even if they contradict your initial theory.
        `,
        options: ["Menu"],
      }
    ],
  },
  {
    id: 'chapter2',
    title: 'The Happiness Experiment',
    sections: [
      {
        id: 'intro',
        text: `Welcome to "The Happiness Experiment"! In this game, you'll play the role of a participant in a study about happiness. But be careful: you'll be facing the dreaded impact bias!
                First, let's set the scene. You're asked to participate in a study about happiness, where you'll be given a task and then asked to rate your happiness before and after completing it. The task is to solve a set of math problems in under 5 minutes. You're a bit nervous, but you're confident that you can do it!
                As you start the task, you realize that the problems are much harder than you expected. You struggle to solve them, and by the end of the 5 minutes, you're feeling frustrated and disappointed in yourself. You rate your happiness level as a 2 out of 10.
                Now it's time for the impact bias to kick in. The researcher tells you that you actually did a great job and that your score was in the top 10% of all participants. They also tell you that you'll receive a prize for your performance. How do you think this new information will affect your happiness level? Take a moment to think about it, and then make your choice.`,
        options: ["I'll be much happier now", "I'll be a little happier now", "I won't be any happier now"],
      },
      {
        id: "I'll be much happier now",
        text: `You think that the good news will make you much happier, and you rate your happiness level as an 8 out of 10. You feel proud of yourself for doing so well, and you're excited to receive the prize. You leave the study feeling happy and satisfied.
                However, as the days pass, you start to realize that the happiness you felt wasn't as strong as you thought it would be. The prize you received was nice, but it didn't bring you the long-lasting happiness you expected. You start to wonder why you weren't happier, despite doing so well on the task.
                Congratulations, you've just experienced impact bias! You overestimated the impact that the good news would have on your happiness level. Even though you did well on the task and received a prize, your happiness level didn't increase as much as you expected.`,
        options: ["Menu"],
      },
      {
        id: "I'll be a little happier now",
        text: `You think that the good news will make you a little happier, and you rate your happiness level as a 5 out of 10. You feel slightly better than before, but you're still disappointed that you didn't do better on the task. You leave the study feeling a bit more positive, but still not completely satisfied.
                As the days pass, you start to realize that the small increase in happiness you felt was actually quite significant. You start to appreciate the prize you received and feel proud of yourself for doing so well on the task. You realize that even small amounts of good news can have a big impact on your happiness level.
                Congratulations, you've just avoided impact bias! You accurately predicted the impact that the good news would have on your happiness level, and you were able to appreciate the small increase in happiness that you experienced.`,
        options: ["Menu"],
      },
      {
        id: "I won't be any happier now",
        text: `You think that the good news won't make you any happier, and you rate your happiness level as a 2 out of 10. You feel like the good news doesn't change the fact that you struggled with the task and didn't do as well as you wanted to. You leave the study feeling disappointed and frustrated.
                As the days pass, you start to realize that you may have missed out on an opportunity to feel a little bit better about yourself. Even though the good news didn't change the fact that you struggled with the task, it still provided a small boost to your happiness level that you might have underestimated. The prize you received and the knowledge that you did well in the top 10% of participants could have given you a sense of accomplishment and pride.
                Congratulations, you've just experienced impact bias! You underestimated the impact that the good news would have on your happiness level. Despite your initial frustration, the good news could have led to a small but significant increase in your happiness, which you didn't fully appreciate.`,
        options: ["Menu"],
      },
    ],
  },
  {
    id: 'chapter3',
    title: 'The Confirmation Experiment',
    sections: [
      {
        id: 'intro',
        text: `Welcome to "The Confirmation Experiment"! In this game, you'll play the role of a participant in a study about decision-making. But be careful: you'll be facing the notorious confirmation bias!
        First, let's set the scene. You're asked to participate in a study about decision-making, where you'll be given a scenario and asked to make a decision based on the information provided. The scenario is as follows:
        You're a manager at a company and you're considering hiring a new employee. You have two candidates to choose from: Candidate A and Candidate B. You're given the following information about each candidate:
        Candidate A: Has a degree from a prestigious university, has worked for a well-known company, and has excellent references. Candidate B: Has a degree from a less well-known university, has worked for a small company, and has good references.
        You have to choose one of the candidates to hire. Take a moment to think about it, and then make your choice.
        `,
        options: ["Candidate A", "Candidate B"],
      },
      {
        id: "Candidate A",
        text: `You choose Candidate A because they have a degree from a prestigious university, have worked for a well-known company, and have excellent references. You're confident that this is the right choice, and you feel good about your decision.
        As you start to review the resumes of the other candidates, you notice that there are a few who have similar qualifications to Candidate A, but who are not as well-known. You start to feel uneasy about your decision and wonder if you made the right choice.
        However, instead of considering the new information objectively, you start to look for evidence that supports your original decision to hire Candidate A. You focus on their impressive qualifications and dismiss the qualifications of the other candidates. You convince yourself that you made the right decision and that Candidate A is the best choice.
        Congratulations, you've just experienced confirmation bias! Instead of considering new information objectively, you focused on evidence that supported your original decision, and dismissed evidence that contradicted it.
        `,
        options: ["Menu"],
      },
      {
        id: "Candidate B",
        text: `You choose Candidate B because they have a degree from a less well-known university, have worked for a small company, and have good references. You're confident that this is the right choice, and you feel good about your decision.
        As you start to review the resumes of the other candidates, you notice that there are a few who have similar qualifications to Candidate B, but who are more well-known. You start to feel uneasy about your decision and wonder if you made the right choice.
        Instead of ignoring the new information, you consider it objectively and weigh the pros and cons of each candidate. You realize that while Candidate B may not have as impressive qualifications as some of the other candidates, they have qualities that make them a good fit for the job. You feel confident that you made the right decision and that Candidate B is the best choice.
        Congratulations, you've just avoided confirmation bias! Instead of focusing on evidence that supported your original decision, you considered new information objectively and made a decision based on the overall strengths and weaknesses of each candidate.
        `,
        options: ["Menu"],
      },
    ],
  }, {
    id: 'chapter4',
    title: 'The News Experiment',
    sections: [
      {
        id: 'intro',
        text: `Welcome to "The News Experiment"! In this game, you'll play the role of a news reader who is prone to selective exposure bias. Your goal is to read and evaluate news articles objectively, without being swayed by your pre-existing beliefs.
        First, let's set the scene. You're a news reader who wants to stay up-to-date with current events. You have a few news sources that you trust, but you also know that it's important to get a balanced perspective. You decide to search for news articles about a controversial topic, such as climate change, and read articles from a variety of sources.
        You start by reading an article from a source that you trust, which supports your beliefs about climate change. You find the article convincing and feel satisfied that your views are supported by the facts.
        Next, you come across an article from a source that you don't trust, which contradicts your beliefs about climate change. You feel skeptical about the article and decide not to read it, assuming that it's biased or inaccurate.
        
        `,
        options: ["Continue reading only articles that support your pre-existing beliefs", "Read the article from the source you don't trust"],
      },
      {
        id: "Continue reading only articles that support your pre-existing beliefs",
        text: `You decide to continue reading only articles that support your pre-existing beliefs about climate change. You find more articles from sources that you trust, all of which support your views. You start to feel more confident in your beliefs and less willing to consider alternative perspectives.
        As time goes on, you become increasingly entrenched in your views and less willing to consider evidence that contradicts them. You start to avoid sources that challenge your beliefs and seek out sources that confirm them. Over time, you become more and more isolated from opposing views and less able to engage in constructive dialogue with those who hold different beliefs.
        Congratulations, you've just experienced selective exposure bias! By only seeking out information that confirms your pre-existing beliefs, you've become more entrenched in those beliefs and less willing to consider alternative perspectives.
            `,
        options: ["Menu"],
      },
      {
        id: "Read the article from the source you don't trust",
        text: `You decide to read the article from the source you don't trust, even though it contradicts your beliefs about climate change. As you read the article, you start to feel uncomfortable with the information presented. You don't agree with the conclusions drawn by the author, but you also recognize that the article is well-researched and presents a compelling argument.
        You decide to do some further research to better understand the topic. You seek out articles from a variety of sources, including those that support your views and those that challenge them. As you read more, you start to realize that the issue of climate change is more complex than you initially thought. You become more open to alternative perspectives and more willing to engage in constructive dialogue with those who hold different beliefs.
        Congratulations, you've avoided selective exposure bias! By seeking out a variety of perspectives and engaging with information that challenges your beliefs, you've become more open-minded and more willing to consider alternative perspectives.
        `,
        options: ["Menu"],
      },
    ],
  },
  {
    id: 'chapter5',
    title: 'The Norms Dilemma',
    sections: [
      {
        id: 'intro',
        text: `Welcome to "The Norms Dilemma"! In this game, you'll play the role of a social psychologist trying to understand how people conform to societal norms. But be careful: you'll be facing the challenge of finding a balance between respecting cultural norms and promoting individuality.
        First, let's set the scene. You're studying a small community that values tradition and conformity. You have access to a dataset with detailed information about the community members' demographics, beliefs, and behaviors. Your goal is to find patterns that could help the community leaders promote harmony and well-being among their members.
        As you start your research, you come across two possible strategies. The first one, proposed by your colleague Emily, suggests that reinforcing traditional norms will lead to increased happiness and social cohesion. The second one, proposed by your colleague James, suggests that promoting individuality and self-expression will result in higher overall well-being.
        Now it's time to make a guess: which strategy do you think is more effective, Emily's or James'? Take a moment to think about it, and then make your choice.
        `,
        options: ["Emily's strategy", "James' strategy"],
      },
      {
        id: "Emily's strategy",
        text: `You decide to trust Emily's suggestion and advise the community leaders to reinforce traditional norms. They implement a series of initiatives aimed at preserving cultural values and traditions. As a result, the community experiences increased happiness and social cohesion.

        Congratulations, your strategy was successful! However, as you continue to observe the community, you notice a growing number of individuals who feel stifled by the strict adherence to norms. You realize that, in your desire to promote harmony, you may have overlooked the importance of individuality and self-expression.   `,
        options: ["Continue"],
      },
      {
        id: "James' strategy",
        text: `You decide to trust James' suggestion and advise the community leaders to promote individuality and self-expression. They implement a series of initiatives aimed at encouraging creativity, diversity, and personal growth. As a result, the community experiences an overall increase in well-being and personal fulfillment.

        Congratulations, your strategy was successful! However, as you continue to observe the community, you notice that some traditional norms have been eroded, leading to occasional conflicts and misunderstandings. You realize that, in your desire to promote individuality, you may have overlooked the importance of respecting cultural norms and traditions.`,
        options: ["Continue"],
      },
      {
        id: "Continue",
        text: `So there you have it, "The Norms Dilemma"! By playing this game, you can see firsthand how striking a balance between respecting cultural norms and promoting individuality can be a challenging task. It's crucial to carefully consider both aspects to foster a harmonious and thriving community.`,
        options: ["Menu"],
      },
    ],
  },
  {
    id: 'chapter6',
    title: 'The Conformity Challenge',
    sections: [
      {
        id: 'intro',
        text: `Welcome to "The Conformity Challenge"! In this game, you'll play the role of a person who is faced with a group of people who all seem to think and act the same way. Your goal is to resist the pressure to conform and make independent decisions based on your own beliefs and values.
        First, let's set the scene. You're attending a party with a group of friends. Everyone is talking and laughing, and the atmosphere is lively. As the night goes on, you start to notice that everyone seems to be drinking a lot of alcohol.
        
        `,
        options: ["Join in and drink as much as everyone else", "Limit your alcohol consumption or not drink at all"],
      },
      {
        id: "Join in and drink as much as everyone else",
        text: `You decide to join in and drink as much as everyone else. You start to feel the effects of the alcohol and become more relaxed and carefree. As the night goes on, you start to notice that everyone seems to be getting louder and more rowdy.
        Despite feeling uncomfortable with the situation, you continue to drink and participate in the group activities. You don't want to be seen as a party pooper or someone who can't handle their alcohol. Over time, you become more and more like the other people at the party, losing your own sense of individuality.
        Congratulations, you've just experienced conformity! By going along with the group and doing what everyone else was doing, you allowed social pressure to influence your decisions.
               `,
        options: ["Continue"],
      },
      {
        id: "Limit your alcohol consumption or not drink at all",
        text: `You decide to limit your alcohol consumption or not drink at all. You're comfortable with your decision and feel confident in your ability to have fun without the need for alcohol. As the night goes on, you start to notice that everyone seems to be getting louder and more rowdy.
        Despite feeling out of place, you stick to your decision and continue to enjoy the party in your own way. You engage with the people at the party, but you don't let their behavior or opinions change your own values and beliefs. Over time, you become more comfortable with being different from the rest of the group and develop a stronger sense of individuality.
        Congratulations, you've resisted conformity! By making independent decisions based on your own beliefs and values, you've developed a stronger sense of self and avoided the pressure to conform to the group.
        `,
        options: ["Continue"],
      },
      {
        id: "Continue",
        text: `In this game, you've learned about conformity and how social pressure can influence our decisions. Remember that it's important to stay true to yourself and make decisions based on your own values and beliefs, even if it means standing out from the crowd. `,
        options: ["Menu"],
      },
    ],
  },
  {
    id: 'chapter7',
    title: 'The Lowball Challenge',
    sections: [
      {
        id: 'intro',
        text: `Welcome to "The Lowball Challenge"! In this game, you'll play the role of a customer who is looking to purchase a product. However, you'll encounter a salesperson who will use the lowball technique to make you commit to buying the product at a higher price than you initially agreed to.
        First, let's set the scene. You're in a store and you're interested in purchasing a new laptop. You find one that you like and ask the salesperson for the price. They tell you that it's $800
        `,
        options: ["Agree to the price and make the purchase", "Try to negotiate for a lower price"],
      },
      {
        id: "Agree to the price and make the purchase",
        text: `You agree to the price and make the purchase. As you're about to pay, the salesperson informs you that there is an additional fee for a warranty that is necessary for the laptop's protection. They tell you that the warranty costs an additional $200. You feel frustrated, but you've already committed to buying the laptop and feel like you can't back out now. You agree to the additional fee and pay a total of $1000.
        Congratulations, you've just experienced the lowball technique! By agreeing to the initial price and committing to the purchase, you allowed the salesperson to raise the price by introducing an additional fee. This technique can be used by salespeople to make customers feel like they're already invested in the product and more likely to agree to additional costs.
                `,
        options: ["Continue"],
      },
      {
        id: "Try to negotiate for a lower price",
        text: `You try to negotiate for a lower price. The salesperson tells you that they can lower the price to $700. You feel satisfied with the price and agree to the purchase. However, as you're about to pay, the salesperson informs you that there is an additional fee for a warranty that is necessary for the laptop's protection. They tell you that the warranty costs an additional $200. You feel frustrated and tell them that you were not informed of this additional cost earlier. The salesperson apologizes and offers to lower the price of the warranty to $100. You decide to accept the lower price and pay a total of $800.
        Congratulations, you've successfully avoided falling for the lowball technique! By negotiating for a lower price and standing firm when presented with additional costs, you were able to make a purchase at the price you wanted without allowing the salesperson to raise the price through the introduction of an additional fee.
        `,
        options: ["Continue"],
      },
      {
        id: "Continue",
        text: `In this game, you've learned about the lowball technique and how salespeople can use it to make customers commit to buying a product at a higher price than they initially agreed to. Remember to always be aware of additional costs and fees and to stand firm when negotiating for a lower price. `,
        options: ["Menu"],
      },
    ],
  },
  {
    id: 'chapter8',
    title: 'The Group Project',
    sections: [
      {
        id: 'intro',
        text: `Welcome to "The Group Project"! In this game, you'll play the role of a student who is working on a group project with three other classmates. However, you'll encounter a situation where social loafing takes place and the group's productivity decreases.
        First, let's set the scene. You're in a class that requires a group project. You've been assigned to a group with three other classmates. You all meet up to discuss how you're going to complete the project.
         `,
        options: ["Take charge and delegate tasks", "Let everyone work on their own without clear roles"],
      },
      {
        id: "Take charge and delegate tasks",
        text: `You take charge and delegate tasks to each member of the group. You make sure that everyone has a clear understanding of their responsibilities and the deadline for each task. However, as the deadline approaches, you notice that one member of the group is not pulling their weight. They're not contributing as much as the others and it's starting to affect the group's productivity. You decide to talk to them and ask if they need any help or if there's a problem. They tell you that they're feeling overwhelmed and don't think they can finish their tasks on time. You offer to help them and delegate some of their tasks to the other members of the group. The group successfully completes the project on time and everyone receives a good grade.
        Congratulations, you've avoided social loafing! By taking charge and delegating tasks, you were able to ensure that everyone had clear responsibilities and were held accountable for their work. By addressing the issue with the member who was not contributing as much, you were able to avoid a situation where the group's productivity decreased.
              `,
        options: ["Continue"],
      },
      {
        id: "Let everyone work on their own without clear roles",
        text: `You let everyone work on their own without clear roles. Each member of the group works on their own part of the project without much communication or coordination. However, as the deadline approaches, you notice that one member of the group is not pulling their weight. They're not contributing as much as the others and it's starting to affect the group's productivity. You try to talk to them, but they don't seem to be very responsive. The group struggles to complete the project on time and everyone receives a lower grade than they had hoped for.
        Unfortunately, you've fallen victim to social loafing. By not taking charge and delegating tasks, you allowed each member of the group to work on their own without clear responsibilities or accountability. This allowed one member to not contribute as much and caused the group's productivity to decrease.
        `,
        options: ["Continue"],
      },
      {
        id: "Continue",
        text: `In this game, you've learned about social loafing and how it can occur when individuals in a group don't feel a sense of responsibility or accountability for their work. Remember to take charge and delegate tasks when working on a group project and to hold everyone accountable for their work to avoid situations where the group's productivity decreases.
        `,
        options: ["Menu"],
      },
    ],
  },
  {
    id: 'chapter9',
    title: 'The Just World',
    sections: [
      {
        id: 'intro',
        text: `Welcome to "The Just World"! In this game, you'll play the role of a student who encounters a situation where the just-world phenomenon takes place.
        First, let's set the scene. You're in a class that requires a group project. You've been assigned to a group with three other classmates. One of your classmates, let's call her Sarah, is very hardworking and always puts in a lot of effort into her work. Another classmate, let's call him Mark, is known for being lazy and not contributing much to group projects.
             `,
        options: ["Attribute Sarah's success to her hard work and Mark's lack of success to his laziness", "Consider other factors that may have contributed to Sarah's success and Mark's lack of success"],
      },
      {
        id: "Attribute Sarah's success to her hard work and Mark's lack of success to his laziness",
        text: `You attribute Sarah's success to her hard work and Mark's lack of success to his laziness. You believe that people get what they deserve and that hard work leads to success. However, as the project progresses, you notice that Sarah is struggling to keep up with the workload and is becoming increasingly stressed. You try to offer her help, but she declines and tells you that she's determined to succeed on her own. Meanwhile, Mark seems to be putting in more effort than usual and is starting to contribute more to the project. However, you still believe that Sarah deserves success and Mark deserves failure. The project is completed and everyone receives a good grade.
        Congratulations, you've fallen victim to just-world phenomenon! By attributing Sarah's success solely to her hard work and Mark's lack of success solely to his laziness, you ignored other factors that may have contributed to their performance. You also didn't consider the possibility that external factors may have influenced their behavior, such as Sarah's stress level or Mark's desire to improve. Remember to consider all the factors that may influence a person's behavior and avoid making snap judgments based solely on their perceived deservingness.
         `,
        options: ["Menu"],
      },
      {
        id: "Consider other factors that may have contributed to Sarah's success and Mark's lack of success",
        text: `You consider other factors that may have contributed to Sarah's success and Mark's lack of success. You recognize that hard work is important, but that other factors such as access to resources, personal circumstances, and luck can also play a role. You also consider that Mark may have had reasons for his previous lack of effort, such as feeling unmotivated or unsupported. As the project progresses, you try to offer support and resources to both Sarah and Mark to ensure that they both have an equal opportunity to succeed. The project is completed and everyone receives a good grade.
        Congratulations, you've avoided just-world phenomenon! By considering all the factors that may influence a person's behavior and avoiding snap judgments based solely on perceived deservingness, you were able to support both Sarah and Mark in their efforts to succeed. Remember to always be mindful of the complex factors that may influence a person's performance and to offer support and resources to help them succeed, regardless of your perceptions of their deservingness.
         `,
        options: ["Menu"],
      },
    ],
  },
  {
    id: 'chapter10',
    title: 'The Confirmation Experiment',
    sections: [
      {
        id: 'intro',
        text: `Welcome to "The Cyberbullying Challenge"! In this game, you'll play the role of a teenager who encounters a situation where cyberbullying is taking place. Your goal is to navigate the situation in a way that helps to prevent further harm.
        First, let's set the scene. You're on social media and notice that one of your classmates has been posting mean comments about another classmate. The comments are hurtful and insulting, and they seem to be getting worse.
            `,
        options: ["Ignore the situation", "Take action"],
      },
      {
        id: "Ignore the situation",
        text: `You choose to ignore the situation and continue scrolling through your feed. However, the mean comments keep popping up and they're starting to make you feel uncomfortable. You start to wonder if you should do something to stop the cyberbullying, but you're not sure what to do. Eventually, you decide to block the classmate who's posting the mean comments and move on. However, you can't shake the feeling that you could have done more to help.
        Congratulations, you've learned that ignoring cyberbullying is not the best approach! While it can be tempting to avoid conflict and ignore negative behavior online, cyberbullying can have serious consequences for the victim's mental health and well-being. If you encounter cyberbullying online, it's important to take action to prevent further harm.
           `,
        options: ["Menu"],
      },
      {
        id: "Take action",
        text: `You choose to take action and reach out to the classmate who's being targeted by the mean comments. You offer words of support and encouragement, and let them know that you're there for them. You also report the mean comments to the social media platform and encourage others to do the same. As a result, the classmate who's posting the mean comments is removed from the platform and the victim feels supported and protected.
        Congratulations, you've successfully prevented cyberbullying! By taking action and standing up against negative behavior online, you were able to protect the victim and prevent further harm. Remember to always speak up when you see cyberbullying happening and to offer support to those who are being targeted. Cyberbullying can have serious consequences, so it's important to take action to prevent it.
                `,
        options: ["Menu"],
      },
    ],
  }, {
    id: 'chapter11',
    title: 'The Secure Attachment Adventure',
    sections: [
      {
        id: 'intro',
        text: `You feel nervous and cling to your caregiver, unwilling to explore the new place. Your caregiver responds by comforting you and staying close by, providing a sense of safety and security. Over time, as you grow more confident and comfortable, you begin to explore the new place while still maintaining contact with your caregiver. This experience helps to establish a secure attachment style, as you feel comfortable seeking out your caregiver for support when you need it, while also feeling confident enough to explore new environments and experiences.
        Congratulations, you've developed a secure attachment style! By having a caregiver who is responsive and supportive, you were able to form a healthy and secure bond that will serve as a foundation for future relationships.
        `,
        options: ["Feeling nervous and cling to your caregiver", "Feeling curious and explore the new place"],
      },
      {
        id: "Feeling nervous and cling to your caregiver",
        text: `You feel nervous and cling to your caregiver, unwilling to explore the new place. Your caregiver responds by comforting you and staying close by, providing a sense of safety and security. Over time, as you grow more confident and comfortable, you begin to explore the new place while still maintaining contact with your caregiver. This experience helps to establish a secure attachment style, as you feel comfortable seeking out your caregiver for support when you need it, while also feeling confident enough to explore new environments and experiences.
        Congratulations, you've developed a secure attachment style! By having a caregiver who is responsive and supportive, you were able to form a healthy and secure bond that will serve as a foundation for future relationships.
                 `,
        options: ["Menu"],
      },
      {
        id: "Feeling curious and explore the new place",
        text: `You feel curious and excited to explore the new place, and you quickly wander off from your caregiver. However, as you explore the new environment, you start to feel scared and unsure of where your caregiver is. When you try to find your caregiver, they are nowhere in sight. This experience can be stressful and can lead to an insecure attachment style, as you may feel uncertain about seeking out others for support and may struggle with trusting others in future relationships.
        Oops, it looks like you didn't develop a secure attachment style in this situation. However, it's important to remember that attachment styles can be influenced by many different factors, and a single experience doesn't determine your attachment style for life. By having positive experiences with responsive and supportive caregivers in the future, you can still develop a secure attachment style that will help you form healthy relationships.
           `,
        options: ["Menu"],
      },
    ],
  }, {
    id: 'chapter12',
    title: 'The Reciprocity Norm Challenge',
    sections: [
      {
        id: 'intro',
        text: `Welcome to "The Reciprocity Norm Challenge"! In this game, you'll play the role of a person who is faced with a situation where the reciprocity norm comes into play. Your goal is to navigate the situation in a way that honors the norm of reciprocity.
        First, let's set the scene. You're at a restaurant and your server goes out of their way to provide excellent service.
         `,
        options: ["Leave a generous tip", "Leave a small tip"],
      },
      {
        id: "Leave a generous tip",
        text: `You're impressed by the server's attentive service and decide to leave a generous tip to show your appreciation. The server thanks you warmly and seems genuinely grateful for your generosity. As you leave the restaurant, you feel good knowing that you were able to honor the reciprocity norm by providing something of value in return for the server's excellent service.
        Congratulations, you've successfully honored the reciprocity norm! By recognizing the value of the service provided by the server and providing something of value in return, you were able to establish a positive relationship and help to maintain a sense of fairness and balance.
          `,
        options: ["Menu"],
      },
      {
        id: "Leave a small tip",
        text: `You're not particularly impressed by the server's service and decide to leave a small tip. The server seems disappointed and you can tell that they were hoping for a better tip. As you leave the restaurant, you feel a bit guilty for not honoring the reciprocity norm and recognizing the value of the service provided by the server.
        Oops, it looks like you didn't honor the reciprocity norm in this situation. Remember, the norm of reciprocity is based on the idea that people feel a sense of obligation to reciprocate when others do something for them. By recognizing the value of the service provided by the server and providing something of value in return, you can help to establish a positive relationship and maintain a sense of fairness and balance.
         `,
        options: ["Menu"],
      },
    ],
  }, {
    id: 'chapter13',
    title: 'The Commons Challenge',
    sections: [
      {
        id: 'intro',
        text: `Welcome to "The Commons Challenge"! In this game, you'll play the role of a community member who is faced with a situation where a social trap comes into play. Your goal is to navigate the situation in a way that avoids the trap and promotes the common good.
        First, let's set the scene. You and your neighbors live in a small community near a lake that provides water for drinking, cooking, and bathing.
         `,
        options: ["Use the lake water sparingly", "As much water as you want"],
      },
      {
        id: "Use the lake water sparingly",
        text: `You recognize that the lake water is a shared resource that must be used wisely in order to sustain the community over time. You choose to use the water sparingly, making sure to conserve as much as possible. Over time, your neighbors follow your example and begin to use water more sparingly as well. As a result, the community is able to avoid the social trap of overusing the shared resource and is able to sustain the lake water for future generations.
        Congratulations, you've successfully avoided the social trap! By recognizing the importance of shared resources and taking actions to conserve them, you were able to promote the common good and ensure the sustainability of the community.
          `,
        options: ["Menu"],
      },
      {
        id: "As much water as you want",
        text: `You choose to use as much water as you want, thinking that the lake water is a limitless resource that can be used freely. Over time, your neighbors follow your example and begin to use water more freely as well. As a result, the community falls into the social trap of overusing the shared resource and the lake water becomes polluted and unusable. The community is forced to find alternative sources of water, which can be expensive and difficult to maintain.
        Oops, it looks like you fell into the social trap in this situation. Remember, a social trap occurs when individuals prioritize their own interests over the common good, leading to the overuse or destruction of shared resources. By recognizing the importance of shared resources and taking actions to conserve them, you can help to avoid social traps and ensure the sustainability of the community.        
         `,
        options: ["Menu"],
      },
    ],
  },
];


interface StoryPageProps {
  setCurrentPage: (page: string) => void;
  chapterIndex: number;
}
const StoryPage: React.FC<StoryPageProps> = ({ setCurrentPage, chapterIndex }) => {
  const [currentChapterId, setCurrentChapterId] = useState(chapters[chapterIndex].id);
  const [currentStoryId, setCurrentStoryId] = useState(chapters[chapterIndex].sections[0].id);

  // Find the current chapter using the currentChapterId
  const currentChapter = chapters.find(chapter => chapter.id === currentChapterId);

  // Find the current section using the currentStoryId
  const currentSection = currentChapter?.sections.find(section => section.id === currentStoryId);

  const onOptionClick = (option: string) => {
    if (option == "Menu") {
      setCurrentPage("menu")
    }
    setCurrentStoryId(option);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#F5F5F5',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 4,
            backgroundColor: '#FFFFFF',
            padding: 4,
            borderRadius: 4,
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
            height: '80vh',
          }}
        >
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
            {currentChapter != undefined && currentChapter.title}
          </Typography>
          {currentChapter != undefined &&
            currentSection?.text.split('\n').map((line, index) => (
              <Typography key={index} variant="body1" align="left">
                {line}
              </Typography>
            ))}
          {currentSection && (
            <StoryButtons options={currentSection.options} onOptionClick={onOptionClick} />
          )}
        </Box>
      </Container>
    </Box>
  );
};

interface StoryButtonsProps {
  options: string[];
  onOptionClick: (option: string) => void;
}

const StoryButtons: React.FC<StoryButtonsProps> = ({ options, onOptionClick }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
      {options.map(option => (
        <Button key={option} variant="contained" onClick={() => onOptionClick(option)}>
          {option}
        </Button>
      ))}
    </Box>
  );
};

export default StoryPage;