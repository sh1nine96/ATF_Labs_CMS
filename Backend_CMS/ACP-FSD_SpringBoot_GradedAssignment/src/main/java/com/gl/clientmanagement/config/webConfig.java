package com.gl.clientmanagement.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class webConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // Update with the correct origin URL
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Add the HTTP methods you need
                .allowedHeaders("*") // Allow all headers
                .allowCredentials(true); // Allow sending credentials like cookies
    }
}
