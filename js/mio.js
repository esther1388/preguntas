

        function examinar() 
        { 
        puntuacion=0; 
        nocontesta=0; 
        contestadas=0; 
        puntosmaximos=0; 

        if(pregunta1!= "0" )
        {
          contestadas=contestadas+1
          puntosmaximos=puntosmaximos+20
          if(pregunta1 == "A") {puntuacion=puntuacion+20}
          if(pregunta1 == "B") {puntuacion=puntuacion+0}
          if(pregunta1 == "C") {puntuacion=puntuacion+0}
          
        }
        else {nocontesta=nocontesta+1} 

        if(pregunta2 != "0")
        {
          contestadas=contestadas+1
          puntosmaximos=puntosmaximos+20
          if(pregunta2 == "A") {puntuacion=puntuacion+0}
          if(pregunta2 == "B") {puntuacion=puntuacion+20}
          if(pregunta2 == "C") {puntuacion=puntuacion+0}
          
        }
        else {nocontesta=nocontesta+1}

        if(pregunta3!= "0" )
        {
          contestadas=contestadas+1
          puntosmaximos=puntosmaximos+20
          if(pregunta3 == "A") {puntuacion=puntuacion+0}
          if(pregunta3 == "B") {puntuacion=puntuacion+0}
          if(pregunta3 == "C") {puntuacion=puntuacion+20}

        }
        else {nocontesta=nocontesta+1} 

        if(pregunta4 != "0")
        {
          contestadas=contestadas+1
          puntosmaximos=puntosmaximos+20
          if(pregunta4 == "A") {puntuacion=puntuacion+20}
          if(pregunta4 == "B") {puntuacion=puntuacion+0}
          if(pregunta4 == "C") {puntuacion=puntuacion+0}
        }
        else {nocontesta=nocontesta+1}

        if(pregunta5!= "0" ){
          contestadas=contestadas+1
          puntosmaximos=puntosmaximos+20
          if(pregunta5 == "A") {puntuacion=puntuacion+0}
          if(pregunta5 == "B") {puntuacion=puntuacion+20}
          if(pregunta5 == "C") {puntuacion=puntuacion+0}
          
        }
        else {nocontesta=nocontesta+1} 

        if (puntosmaximos!=0) 
        {indiceacierto=Math.round(100*(puntuacion/puntosmaximos))
        } 
        else{indiceacierto=0} 

        if(contestadas==0)
        {
        mensaje="Sin contestar"} 

        alert("Calificación final es de  "+puntuacion)
        alert("Las respuestas correctas eran: 1) A, 2) B, 3)C, 4) A, 5)C") 
        }

