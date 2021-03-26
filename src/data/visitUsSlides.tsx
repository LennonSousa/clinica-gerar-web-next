import ImageSlide01 from '../assets/images/visit-us/atendimento.jpg';
import ImageSlide02 from '../assets/images/visit-us/entrada.jpg';
import ImageSlide03 from '../assets/images/visit-us/exames.jpg';
import ImageSlide04 from '../assets/images/visit-us/medicos.jpg';
import ImageSlide05 from '../assets/images/visit-us/quarto-01.jpg';
import ImageSlide06 from '../assets/images/visit-us/quarto-02.jpg';
import ImageSlide07 from '../assets/images/visit-us/corredor.jpg';
import ImageSlide08 from '../assets/images/visit-us/recepcao.jpg';
import ImageSlide09 from '../assets/images/visit-us/sala-procedimentos.jpg';
import ImageSlide10 from '../assets/images/visit-us/ultrassom.jpg';

interface VisitUsSlide {
    id: number,
    title: string,
    description: string,
    cover: string,
}

export const slides: VisitUsSlide[] = [
    {
        id: 0,
        title: 'Recepção',
        description: 'Estamos aqui para lhe atender com todo carinho.',
        cover: ImageSlide01,
    },
    {
        id: 1,
        title: 'Entrada principal',
        description: 'Estamos no 5º andar, salar 501.',
        cover: ImageSlide02,
    },
    {
        id: 2,
        title: 'Salas de exames',
        description: 'Temos os melhores profissionais e equipamentos para lhe oferecer exames e consultas de confiança.',
        cover: ImageSlide03,
    },
    {
        id: 3,
        title: 'Dr. Evaldo e Dra. Cristina',
        description: 'A melhor equipe para lhe atenter.',
        cover: ImageSlide04,
    },
    {
        id: 4,
        title: 'Quartos',
        description: 'Muito conforto e qualidade.',
        cover: ImageSlide05,
    },
    {
        id: 5,
        title: 'Leito',
        description: 'O melhor para você.',
        cover: ImageSlide06,
    },
    {
        id: 6,
        title: 'Corredores',
        description: 'Tudo feito com muito carinho para você.',
        cover: ImageSlide07,
    },
    {
        id: 7,
        title: 'Sala de espera',
        description: 'Aqui o atendimento é rápido e você espera tranquilo.',
        cover: ImageSlide08,
    },
    {
        id: 8,
        title: 'Sala de procedimentos',
        description: 'O melhor para a sua saúde.',
        cover: ImageSlide09,
    },
    {
        id: 9,
        title: 'Sala de ultrassonografia',
        description: 'Os melhores equipamentos para o melhor exame.',
        cover: ImageSlide10,
    },
    
];

export default slides;