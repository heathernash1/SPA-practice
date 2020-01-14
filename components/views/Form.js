export default `
<!--
The action attribute defines where on the server the form data should be sent
The method attribute specifies the HTTP method (GET or POST)
-->

    <form

      method="POST"
      class="flex flex--column align-center"
      data-netlify="true"
      name="contact"
    >
    <p class="align-center"> Do you have ideas for additional activities?  Submit them here! </p>
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
        />
      </div>

      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@somewhere.com"
        />
      </div>

      <div>
        <label for="fone">Phone:</label>
        <input type="tel" name="fone" id="fone" />
      </div>

      <div class="flex flex--column">
        <label for="msg">Enter your message:</label>
        <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
      </div>
      <p>Thank you for your questions or comments!</p>

      <div class="text-align-center">
        <div class="flex">
          <input
            type="radio"
            name="subject"
            value="professional"
            id="pro"
            checked
          />
          <label for="pro">I'd like to hire you!</label>
        </div>

        <div class="flex">
          <input
            type="radio"
            name="subject"
            value="personal"
            id="personal"
          />
          <label for="personal">Personal message</label>
        </div>

        <div class="flex">
          <input type="radio" name="subject" value="other" />
          <label>Suggestions for additional activities.</label>
        </div>
      </div>

      <div>
        <input
          type="checkbox"
          name="option"
          value="trusting"
          id="news"
          checked
        />
        <label for="news">Subscribe me to your newsletter!</label>
      </div>

      <div>
        <label for="marketing">How did you hear about me?</label>
        <select name="marketing">
          <optgroup label="Online">
            <option value="social"
              >Social Media (FB, Twitter, LinkedIn)</option
            >
            <option value="github">Online Portfolio (GitHub)</option>
            <option value="search">Search Engine</option>
            <option value="email">Email</option>
          </optgroup>
          <optgroup label="In-Person">
            <option value="networking"
              >We met at a networking event</option
            >
            <option value="referral">Personal referral</option>
            <option value="random">We met somewhere else</option>
          </optgroup>
          <option value="other">Other</option>
        </select>
      </div>

      <!-- Developer's Note: Default 'type' is "submit". -->
      <button>Submit!</button>
    </form>
`;
