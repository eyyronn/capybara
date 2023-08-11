import React from 'react';
import './Content.css';

function RealContent() {
  return (
    <div id="realSection" className="section">
      <h2>Are Capybaras <span> real? </span></h2>
      <p>You won't believe this, but capybaras are actually real! I know, it might sound a little surprising, but it's true. Capybaras are fascinating creatures that live in places far away, like in South America. Imagine a really big guinea pig, and that's kind of what a capybara looks like.</p>
    </div>
  );
}

function FriendlyContent() {
  return (
    <div id="friendlySection" className="section">
      <h2>Are Capybaras <span> friendly? </span> </h2>
      <p> Capybaras are incredibly friendly creatures! 🌟 They have this amazing ability to make friends with all sorts of animals. Imagine having a big, furry buddy who loves hanging out with ducks, birds, and even turtles! It's like they have a "welcome" sign on their backs for all their pals.</p>
    </div>
  );
}

function DangerousContent() {
    return (
      <div id="dangerousSection" className="section">
        <h2>Are Capybaras <span> dangerous? </span> </h2>
        <p> Capybaras are actually... not very dangerous at all! These fascinating creatures have hearts as big as their bodies, and they're as gentle as a soft breeze. Capybaras prefer munching on plants and swimming in water rather than causing any trouble. They're like the peaceful professors of the animal kingdom, always teaching us the importance of getting along. So, to answer your question, capybaras are about as dangerous as a teddy bear picnic. They're more likely to offer you a snack than to cause any harm.</p>
      </div>
    );
  }

  function EndangeredContent() {
    return (
      <div id="endangeredSection" className="section">
        <h2>Are Capybaras <span> endangered? </span> </h2>
        <p> Capybaras, those fascinating creatures, aren't exactly endangered. They're like the cool friends in the animal world who are doing pretty well. They're not in trouble like some other animals, but it's still important to make sure they have a safe and happy environment to live in.</p>
      </div>
    );
  }

  function PetsContent() {
    return (
      <div id="PetsSection" className="section">
        <h2>Are Capybaras <span> pets? </span> </h2>
        <p> Some people do have capybaras as pets, but it's not like having a regular cat or dog. Capybaras need special care because they're unique animals.

            Capybaras are super social and love hanging out with others, so if you want one as a pet, you might need to have more than one capybara friend. Also, they like water, so a nice pool or pond is like their happy place!
            </p>
      </div>
    );
  }
  
  function BigContent() {
    return (
      <div id="BigSection" className="section">
        <h2>Are Capybaras <span> big? </span> </h2>
        <p> You bet they are! Capybaras are quite big and impressive animals. Imagine a creature that's about the size of a small dog but with a chunkier build. They can weigh around 77 to 146 pounds (35 to 66 kilograms) and stand about 1 to 2 feet (30 to 61 centimeters) tall at the shoulder.

            Picture a cozy, furry friend that's about the size of a medium-sized dog, but with a more laid-back and gentle vibe. Capybaras are definitely bigger than most of the animals you might see around, and that's part of what makes them so unique and interesting! </p>
      </div>
    );
  }
  
  function PhilippinesContent() {
    return (
      <div id="PhilSection" className="section">
        <h2>Are Capybaras <span> in the Philippines? </span> </h2>
        <p> Oh, that's an interesting question! While capybaras are not native to the Philippines, they are actually found in parts of South America. These fascinating creatures love the warm and tropical climates of countries like Brazil, Venezuela, Colombia, and others in that region. So, if you ever visit the Philippines, you might not come across capybaras there, but you'll have the chance to see many other amazing animals that call the Philippines their home!</p>
      </div>
    );
  }

export { RealContent, FriendlyContent, DangerousContent, EndangeredContent, PetsContent, BigContent, PhilippinesContent };
