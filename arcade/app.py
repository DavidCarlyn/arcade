"""
Class and functionality to create an app
"""
import pygame

class App():
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((1280, 720))
        self.clock = pygame.time.Clock()
        self.running = False

    def poll_events(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.running = False

    def render(self):
        self.screen.fill("purple")

        pygame.display.flip() # After all rendering is done flip work to application screen

    def run(self):
        self.running = True

        while self.running:
            self.poll_events()
            self.render()
            self.clock.tick(60)

    
if __name__ == "__main__":
    app = App()
    app.run()