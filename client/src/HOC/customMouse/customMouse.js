import React, { createRef } from 'react'
import './customMouse.css'

const customMouse = (WrappedComponent) => {
    
    return class extends React.Component{

        constructor(props){
            super(props)

            this.cursorOutline = createRef()
            this.cursorDot = createRef()

        }

        componentDidMount() {

            
            const cursor = {
                delay: 8,
                _x: 0,
                _y: 0,
                endX: (window.innerWidth / 2),
                endY: (window.innerHeight / 2),
                cursorVisible: true,
                cursorEnlarged: false,
                $dot: this.cursorDot.current,
                $outline: this.cursorOutline.current,
                
                init: function() {
                    this.dotSize = this.$dot.offsetWidth;
                    this.outlineSize = this.$outline.offsetWidth;
                    
                    this.setupEventListeners();
                    this.animateDotOutline();
                },
            
                
                setupEventListeners: function() {
                    var self = this;

                    
                    // Anchor hovering
                    document.querySelectorAll('a').forEach(function(el) {
                        el.addEventListener('mouseover', function() {
                            self.cursorEnlarged = true;
                            self.toggleCursorSize();
                        });
                        el.addEventListener('mouseout', function() {
                            self.cursorEnlarged = false;
                            self.toggleCursorSize();
                        });
                    });
                    
                    // Click events
                    document.addEventListener('mousedown', function() {
                        self.cursorEnlarged = true;
                        self.toggleCursorSize();
                    });
                    document.addEventListener('mouseup', function() {
                        self.cursorEnlarged = false;
                        self.toggleCursorSize();
                    });
              
              
                    document.addEventListener('mousemove', function(e) {
                        // Show the cursor
                        self.cursorVisible = true;
                        self.toggleCursorVisibility();
            
                        // Position the dot
                        self.endX = e.clientX;
                        self.endY = e.clientY;
                        self.$dot.style.top = self.endY + 'px';
                        self.$dot.style.left = self.endX + 'px';
                    });

                    
                    document.addEventListener('mouseleave', function(e) {
                        self.cursorVisible = true;
                        self.toggleCursorVisibility();
                        self.$dot.style.opacity = 0;
                        self.$outline.style.opacity = 0;
                    });
                },
                
                animateDotOutline: function() {
                    var self = this;
                    
                    self._x += (self.endX - self._x) / self.delay;
                    self._y += (self.endY - self._y) / self.delay;
                    self.$outline.style.top = self._y + 'px';
                    self.$outline.style.left = self._x + 'px';
                    
                    requestAnimationFrame(this.animateDotOutline.bind(self));
                },
                
                toggleCursorSize: function() {
                    var self = this;
                    
                    if (self.cursorEnlarged) {
                        self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
                        self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                    } else {
                        self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
                        self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
                    }
                },
                
                toggleCursorVisibility: function() {
                    var self = this;
                    
                    if (self.cursorVisible) {
                        self.$dot.style.opacity = 1;
                        self.$outline.style.opacity = 1;
                    } else {
                        self.$dot.style.opacity = 0;
                        self.$outline.style.opacity = 0;
                    }
                }
            }

            cursor.init();
        }
        componentDidUpdate(prevProps, prevState) {
            console.log('update')
        }
        
        

        render(){
            return(
                <React.Fragment>
                    <div ref={this.cursorOutline} className="cursor-dot-outline"></div>
                    <div ref={this.cursorDot} className="cursor-dot"></div>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }
    }   
}

export default customMouse