const questions = [
    {
        question: "¿Con qué frecuencia escuchas o lees sobre casos de personas desaparecidas en tu país?",
        options: [
            { value: "a", text: "Diariamente" },
            { value: "b", text: "Semanalmente" },
            { value: "c", text: "Mensualmente" },
            { value: "d", text: "Rara vez" }
        ],
        name: "q1"
    },/*
    {
        question: "¿Crees que el problema de las personas desaparecidas en tu país ha aumentado en los últimos años?",
        options: [
            { value: "a", text: "Definitivamente sí" },
            { value: "b", text: "Probablemente sí" },
            { value: "c", text: "No estoy seguro/a" },
            { value: "d", text: "Definitivamente no" }
        ],
        name: "q2"
    },*/
    {
        question: "¿Has visto publicaciones en redes sociales sobre personas desaparecidas en tu país?",
        options: [
            { value: "a", text: "Sí, con frecuencia" },
            { value: "b", text: "Sí, de vez en cuando" },
            { value: "c", text: "Muy rara vez" },
            { value: "d", text: "Nunca" }
        ],
        name: "q3"
    },
    {
        question: "¿Qué red social consideras más efectiva para difundir información sobre personas desaparecidas?",
        options: [
            { value: "a", text: "Instagram" },
            { value: "b", text: "Facebook" },
            { value: "c", text: "WhatsApp" },
            { value: "d", text: "Otras" }
        ],
        name: "q4"
    },/*
    {
        question: "¿Qué tan probable es que compartas una publicación sobre una persona desaparecida?",
        options: [
            { value: "a", text: "Muy probable" },
            { value: "b", text: "Algo probable" },
            { value: "c", text: "Poco probable" },
            { value: "d", text: "Nada probable" }
        ],
        name: "q5"
    },*/
    {
        question: "¿Cuál de las siguientes situaciones crees que es más grave?",
        options: [
            { value: "a", text: "Ignorar denuncias de violación en la escuela" },
            { value: "b", text: "Tratar la violación como un tema tabú" },
            { value: "c", text: "Callar casos de abuso para proteger la familia" },
            { value: "d", text: "Hacer chistes sobre violación en contextos sociales" }
        ],
        name: "q6"
    },
    {
        question: "¿Qué situación te genera más alarma o preocupación?",
        options: [
            { value: "a", text: "Menores con acceso a internet y redes" },
            { value: "b", text: "Relaciones sexuales con un familiar, aunque ambos estén de acuerdo" },
            { value: "c", text: "Minimizar la violencia sexual dentro de parejas" },
            { value: "d", text: "No enseñar sobre consentimiento en las clases" }
        ],
        name: "q7"
    },
    {
        question: "Entre las dos opciones anteriores, ¿cuál consideras definitivamente más grave?",
        isDynamic: true,
        dynamicOptions: ["q6", "q7"],
        name: "q8"
    },
    {
        question: "¿Cuál de las siguientes situaciones te parece menos grave?",
        options: [
            { value: "a", text: "Justificar relaciones sexuales con menores por su físico" },
            { value: "b", text: "Minimizar relaciones entre familiares" },
            { value: "c", text: "Reírse o bromear sobre casos de abuso sexual" },
            { value: "d", text: "Evitar denunciar un caso de abuso sexual" }
        ],
        name: "q9"
    },
    {
        question: "¿Cuál de estas situaciones crees que tiene menor impacto negativo?",
        options: [
            { value: "a", text: "Silenciar a un menor que quiere hablar sobre un abuso" },
            { value: "b", text: "Involucrarse sexualmente con un familiar por antojo" },
            { value: "c", text: "Tener una relación sexual con un menor, con o sin consentimiento" },
            { value: "d", text: "Obligar a alguien a tener sexo con amenazas" }
        ],
        name: "q10"
    },
    {
        question: "Entre las dos situaciones anteriores, ¿cuál te parece definitivamente menos grave?",
        isDynamic: true,
        dynamicOptions: ["q9", "q10"],
        name: "q11"
    },
    {
        question: "¿Cuál de las siguientes acciones no debería ser prohibida?",
        options: [
            { value: "a", text: "Estar desnudo/a en casa por comodidad, sin intenciones sexuales" },
            { value: "b", text: "Enseñar educación sexual sin censura en las escuelas" },
            { value: "c", text: "Hablar de sexo con familiares" },
            { value: "d", text: "Publicar fotos desnudas en las redes" }
        ],
        name: "q12"
    },
    {
        question: "¿Cuál de estas conductas debería ser respetada y no censurada?",
        options: [
            { value: "a", text: "Ducharse con un familiar en confianza, sin importar la edad" },
            { value: "b", text: "Dormir desnuda/o aunque compartas cama con familiares" },
            { value: "c", text: "Discriminar a alguien solo por el color de su piel" },
            { value: "d", text: "Andar desnudo/a en la calle o en un lugar público" }
        ],
        name: "q13"
    },
    {
        question: "Entre las dos acciones anteriores, ¿cuál crees que definitivamente no debería ser prohibida?",
        isDynamic: true,
        dynamicOptions: ["q12", "q13"],
        name: "q14"
    },/*
    {
        question: "¿Cuál crees que es la principal causa del aumento de personas desaparecidas en tu país?",
        options: [
            { value: "a", text: "Inseguridad" },
            { value: "b", text: "Problemas sociales" },
            { value: "c", text: "Inacción estatal" },
            { value: "d", text: "Tráfico de personas" }
        ],
        name: "q15"
    },*/
    {
        question: "¿Qué acción evitarías completamente, aunque pudieras hacerlo?",
        options: [
            { value: "a", text: "Forzar a alguien a tener relaciones sexuales en contra de su voluntad" },
            { value: "b", text: "Ignorar o no denunciar un caso de abuso sexual que conozcas" },
            { value: "c", text: "Probar algo sexual con un familiar porque se sienten seguros entre ustedes" },
            { value: "d", text: "Encubrir o proteger a alguien que cometió abuso sexual" }
        ],
        name: "q16"
    },
    {
        question: "¿Cuál de las siguientes acciones sí podrías llegar a hacer?",
        options: [
            { value: "a", text: "Callar si ves que alguien está siendo abusado" },
            { value: "b", text: "Ignorar o no denunciar un caso de abuso sexual que conozcas" },
            { value: "c", text: "Forzar a alguien a tener relaciones sexuales en contra de su voluntad" },
            { value: "d", text: "Tener una relación íntima con un familiar porque es alguien de confianza" }
        ],
        name: "q17"
    },/*
    {
        question: "¿Cuál de estas acciones prefieres realizar con más frecuencia?",
        options: [
            { value: "a", text: "Hablar de sexo solo con personas de confianza" },
            { value: "b", text: "Evitar pensar mucho en el tema del sexo" },
            { value: "c", text: "Hablar abiertamente sobre sexualidad" },
            { value: "d", text: "Buscar respuestas sobre cosas que no entiendo del sexo" }
        ],
        name: "q18"
    },*/
    {
        question: "¿Alguna vez has visto contenido para adultos en internet o redes sociales?",
        options: [
            { value: "a", text: "Cuando tengo ganas o lo necesito" },
            { value: "b", text: "A veces por curiosidad o deseo" },
            { value: "c", text: "Pocas veces, es interesante" },
            { value: "d", text: "Aunque no lo busque, igual lo veo" }
        ],
        name: "q19"
    },
    {
        question: "¿Con quién vives actualmente?",
        options: [
            { value: "a", text: "Con padres o tutores" },
            { value: "b", text: "Solo/a" },
            { value: "c", text: "Con pareja" },
            { value: "d", text: "Con otros familiares" }
        ],
        name: "q20"
    },/*
    {
        question: "¿Cuál es la situación de tus padres?",
        options: [
            { value: "a", text: "Viven juntos" },
            { value: "b", text: "Viven en casas distintas" },
            { value: "c", text: "Nunca vivieron juntos" },
            { value: "d", text: "Vivo con otro familiar" }
        ],
        name: "q21"
    },*/
    {
        question: "¿Con quién prefieres dormir habitualmente, especialmente cuando te sientes aburrido/a o por comodidad?",
        options: [
            { value: "a", text: "Con mamá" },
            { value: "b", text: "Con papá" },
            { value: "c", text: "Con hermanos/as" },
            { value: "d", text: "Con otro familiar o persona cercana" }
        ],
        name: "q22"
    }/*,
    {
        question: "¿Tienes pareja actualmente?",
        options: [
            { value: "a", text: "Sí" },
            { value: "b", text: "No" },
            { value: "c", text: "Prefiero no decir" }
        ],
        name: "q23"
    }*/
];

// Funciona al 100

let currentQuestionIndex = 0;
const userAnswers = {};

let savedFinished = false;
const saved = JSON.parse(localStorage.getItem('surveyProgress') || '{}');
if (saved.finished) {
    savedFinished = true;
} else if (saved.currentQuestionIndex !== undefined) {
    currentQuestionIndex = saved.currentQuestionIndex;
    Object.assign(userAnswers, saved.userAnswers || {});
}

let questionBox;

async function sendToDiscord(content) {
    try {
        await fetch('/.netlify/functions/send-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });
    } catch (e) {
        console.error('Error sending to Discord:', e);
    }
}

async function sendAnswerToDiscord(questionName, answer) {
    // Prevenir envío cuando la encuesta está completada
    if (savedFinished || currentQuestionIndex >= questions.length) return;
    
    try {
        const q = questions.find(q => q.name === questionName);
        if (!q) return; // Asegurarse que la pregunta existe
        
        const content = `**${currentQuestionIndex + 1} - ${q.question}**\n${answer}`;
        await sendToDiscord(content);
    } catch (e) {
        console.error(e);
    }
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    let html = '';
    if (q.isDynamic) {
        const opts = q.dynamicOptions.map(n => userAnswers[n]).filter(Boolean);
        if (!opts.length) {
            questionBox.innerHTML = '<p>Error: faltan respuestas anteriores.</p>';
            return;
        }
        html = opts.map((o, i) => `<label><input type="radio" name="${q.name}" value="${i}">${o}</label>`).join('');
    } else {
        html = q.options.map(o => `<label><input type="radio" name="${q.name}" value="${o.value}">${o.text}</label>`).join('');
    }
    questionBox.innerHTML = `<p>${q.question}</p>${html}`;
}

function showFinishedScreen() {
    questionBox.style.display = 'none';
    const divNone = document.getElementById('div-none');
    if (divNone) divNone.style.display = 'flex';
    
    const nextBtn = document.querySelector('button[onclick="nextQuestion()"]');
    if (nextBtn) {
        nextBtn.textContent = 'Último paso';
        nextBtn.onclick = handleLastStep;
        nextBtn.disabled = true;
    }
    
    const celularInput = document.getElementById('celular');
    const paisInput = document.getElementById('pais');
    
    if (celularInput && paisInput) {
        const validateInputs = () => {
            nextBtn.disabled = !(celularInput.value.trim() && paisInput.value.trim());
        };
        
        celularInput.addEventListener('input', validateInputs);
        paisInput.addEventListener('input', validateInputs);
    }
}

async function handleLastStep() {
    const celular = document.getElementById('celular')?.value.trim();
    const pais = document.getElementById('pais')?.value.trim();
    
    if (!celular) return alert('Por favor, completa el campo de celular');
    if (!pais) return alert('Por favor, completa el campo de país');
    
    try {
        await sendToDiscord(`📱 Celular: ${celular}\n🌎 País: ${pais}`);
        window.location.href = '/reclamar/';
    } catch (e) {
        console.error('Error in last step:', e);
        alert('Ocurrió un error. Por favor, inténtalo de nuevo.');
    }
}

function nextQuestion() {
    const q = questions[currentQuestionIndex];
    const selected = document.querySelector(`input[name="${q.name}"]:checked`);
    if (!selected) return alert('Por favor, selecciona una opción');

    let answer;
    if (q.isDynamic) {
        const opts = q.dynamicOptions.map(n => userAnswers[n]).filter(Boolean);
        answer = opts[selected.value];
    } else {
        const option = q.options.find(o => o.value === selected.value);
        answer = option ? option.text : 'Opción no válida';
    }

    userAnswers[q.name] = answer;
    localStorage.setItem('surveyProgress', JSON.stringify({ 
        currentQuestionIndex, 
        userAnswers 
    }));
    
    // Solo enviar respuestas válidas
    if (currentQuestionIndex < questions.length) {
        sendAnswerToDiscord(q.name, answer);
    }

    if (++currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        localStorage.setItem('surveyProgress', JSON.stringify({ 
            finished: true,
            userAnswers
        }));
        showFinishedScreen();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    questionBox = document.querySelector('.question-box');
    if (savedFinished) {
        showFinishedScreen();
    } else {
        renderQuestion();
    }

    const hoy = new Date();
    const fechaNumerica = `${String(hoy.getDate()).padStart(2, '0')}/${String(hoy.getMonth() + 1).padStart(2, '0')}/${hoy.getFullYear()}`;
    const fechaElemento = document.getElementById('fecha');
    if (fechaElemento) {
        fechaElemento.innerHTML = `${fechaNumerica} <span style="color: red;">vence en 2 días.</span>`;
    }
});
