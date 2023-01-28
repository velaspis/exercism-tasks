// @ts-nocheck

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
    const regex1 = /Chatbot/i;
      const com=command.match(regex1);
      console.log(com)
      if (com.index==0){
        return true
      }else return false
    }
    
    /**
     * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
     *
     * @param {string} message
     * @returns {string} The message without the emojis encryption
     */
    export function removeEmoji(message) {
    const regex1=/emoji/gi;
    const emote = message.replace(/\d+|emoji/g, '');
      console.log(emote)
      return emote
    }
    
    /**
     * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
     *
     * @param {string} number
     * @returns {string} the Chatbot response to the phone Validation
     */
    export function checkPhoneNumber(number) {
    const pattern = /^\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}$/;
       const result = pattern.test(number);
      if (result===true){
        return "Thanks! You can now download me to your phone."
      }else return `Oops, it seems like I can't reach out to ${number}`
     
    
    }
    
    /**
     * Given a certain response from the user, help the chatbot get only the URL.
     *
     * @param {string} userInput
     * @returns {string[] | null} all the possible URL's that the user may have answered
     */
    export function getURL(userInput) {
      return [
        'youtube.com', 
        'theodinproject.com', 
        'reddit.com', 
        'notion.so'
      ].filter((domain) => userInput.includes(domain))
    }
    
    /**
     * Greet the user using the full name data from the profile.
     *
     * @param {string} fullName
     * @returns {string} Greeting from the chatbot
     */
    export function niceToMeetYou(fullName) {
      const politeName = fullName.replace(/([a-z]+), ([a-z]+)/i, '$2 $1')
      return `Nice to meet you, ${politeName}`
    }
    