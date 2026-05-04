document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
        const chatSend = document.getElementById('chat-send');
            const chatMessages = document.getElementById('chat-messages');

                function addMessage(text, isUser) {
                        const messageDiv = document.createElement('div');
                                messageDiv.className = isUser ? 'message user-message' : 'message bot-message';
                                        messageDiv.textContent = text;
                                                chatMessages.appendChild(messageDiv);
                                                        chatMessages.scrollTop = chatMessages.scrollHeight;
                                                            }

                                                                async function respondChat(query) {
                                                                        // Simple local knowledge/mock Wikipedia responder
                                                                                const lowerQuery = query.toLowerCase();
                                                                                        let response = "I'm not sure about that. I'm Vivek's assistant!";

                                                                                                if (lowerQuery.includes('who is vivek')) {
                                                                                                            response = "Vivek is a Computer Science student and developer. You can see more about him on this page!";
                                                                                                                    } else if (lowerQuery.includes('skills')) {
                                                                                                                                response = "Vivek has skills in Web Development, Python, and more.";
                                                                                                                                        } else if (lowerQuery.includes('contact')) {
                                                                                                                                                    response = "You can contact Vivek using the form on this page.";
                                                                                                                                                            }
                                                                                                                                                            
                                                                                                                                                                    addMessage(response, false);
                                                                                                                                                                        }
                                                                                                                                                                        
                                                                                                                                                                            chatSend.addEventListener('click', () => {
                                                                                                                                                                                    const text = chatInput.value.trim();
                                                                                                                                                                                            if (text) {
                                                                                                                                                                                                        addMessage(text, true);
                                                                                                                                                                                                                    chatInput.value = '';
                                                                                                                                                                                                                                respondChat(text);
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                chatInput.addEventListener('keypress', (e) => {
                                                                                                                                                                                                                                                        if (e.key === 'Enter') {
                                                                                                                                                                                                                                                                    chatSend.click();
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                function handleContactSubmit(event) {
                                                                                                                                                                                                                                                                                    event.preventDefault();
                                                                                                                                                                                                                                                                                        alert('Thank you for your message! (Note: This is a demo, messages aren\'t actually sent yet without a backend)');
                                                                                                                                                                                                                                                                                        }
