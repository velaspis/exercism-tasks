//
// @ts-check

/**
 * Creates a new visitor.
 *
 
 */
export function createVisitor(name, age, ticketId) {
    const visitor ={
    name,
      age,
      ticketId
    }
      return visitor
    }
    
    /**
     * Revokes a ticket for a visitor.
     *
     *tor without a ticket
     */
    export function revokeTicket(visitor) {
    console.log(visitor)
      visitor. ticketId=null;
      return visitor
    }
    
    /**
     * Determines the status a ticket has in the ticket tracking object.
     *
     * @param {Record<string, string|null>} tickets
     * @param {string} ticketId
     * @returns {string} ticket status
     */
    export function ticketStatus(tickets, ticketId) {
    
     if ( tickets.hasOwnProperty(ticketId)){
       if(tickets[ticketId]===null){
         console.log ('not sold')
           return "not sold"
         }
       else  {
         return `sold to ${tickets[ticketId]}`
       }
        
     }else {
       console.log('unknown ticket id')
       return 'unknown ticket id'
     }
      
    
      
    }
    
    /**
     * Determines the status a ticket has in the ticket tracking object
     * and returns a simplified status message.
     *
     * @param {Record<string, string|null>} tickets
     * @param {string} ticketId
     * @returns {string} ticket status
     */
    export function simpleTicketStatus(tickets, ticketId) {
    if ( tickets.hasOwnProperty(ticketId)){
       if(tickets[ticketId]===null){
         console.log ('not sold')
           return 'invalid ticket !!!'
         }
       else  {
         return `${tickets[ticketId]}`
       }
        
     }else {
       console.log('unknown ticket id')
       return 'invalid ticket !!!'
     }
    }
    
    /**
     * Determines the version of the GTC that was signed by the visitor.
     *
    //  * @param {VisitorWithGtc} visitor
     * @returns {string | undefined} version
     */
    export function gtcVersion(visitor) {
      return visitor.gtc&&visitor.gtc.version
    }
    