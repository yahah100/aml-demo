document.addEventListener('DOMContentLoaded', function() {
    // Load components with the 'load-component' attribute
    document.querySelectorAll('[data-component]').forEach(container => {
        const componentPath = container.getAttribute('data-component');
        
        fetch(componentPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load component: ${componentPath}`);
                }
                return response.text();
            })
            .then(html => {
                container.innerHTML = html;
                
                // Execute any scripts that were in the loaded HTML
                container.querySelectorAll('script').forEach(oldScript => {
                    const newScript = document.createElement('script');
                    Array.from(oldScript.attributes).forEach(attr => {
                        newScript.setAttribute(attr.name, attr.value);
                    });
                    newScript.textContent = oldScript.textContent;
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });
            })
            .catch(error => {
                console.error(error);
                container.innerHTML = `<div class="alert alert-danger">Error loading component: ${error.message}</div>`;
            });
    });
}); 