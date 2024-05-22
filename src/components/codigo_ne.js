nuevo 


const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
  
    const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    });
  
    const result = await res.json();
  
    if (res.status === 200) {
        setStatus('Correo enviado con éxito');
    } else {
        setStatus('Error al enviar el correo');
    }
  };



  viejo


  