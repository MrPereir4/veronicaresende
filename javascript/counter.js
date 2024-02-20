

var countOptions = {
    useEasing: true,
    separator: '.'
  }
  
  var count = new CountUp('customer_counter', 0, 400, 0, 5, countOptions);
  
  let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.id === 'customer_counter') {
          count.start(function() {
            
          });
        }
        // Opcional: desative o observador após a primeira interseção
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  
  
  function observarElemento(id) {
    let elemento = document.getElementById(id);
    if (elemento) {
      observer.observe(elemento);
    }
  }
  
  observarElemento('customer_counter');