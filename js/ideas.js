$(document).ready(function () {
    const ideas = [
        {no: '1', title: 'Үргэлж хийхийг хүсдэг ч хэзээ ч зориглож үзээгүй зүйлээ хамт хийх.', desc: 'Хамт суугаад хийхээс айдаг зүйлсээ сугалаа шиг бичээрэй. Тэгээд нэгийг сугалж гаргаад шууд хийх дүрэмтэй'},
        {no: '2', title: 'Хамтдаа сайн үйлсийн аянд оролцох.', desc: ''},
        {no: '3', title: 'Жижигхэн дэвтэр гаргаад ээлжилж хөтлөх.', desc: 'Уулзах бүртээ дэвтрээ солих бөгөөд нэгэндээ хэлэхийг хүссэн үг, таалагдсан шүлэг, киноны нэр, сонсгохыг хүссэн дуу, нэгэндээ зориулсан зураг, тэмдэглэл гээд аль болох бүтээлчээр хандвал бүр гоё!'},
        {no: '4', title: 'Дурсамжийн аялал хийх.', desc: 'Арван жил, оюутан цагтаа сурдаг байсан сургуулиараа зочлонгоо нэгэндээ өөрийнхөө тухай, бага насныхаа тухай ярьж өгөхөд тохиромжтой дурсгалтай болзоо байх болно'},
        {no: '5', title: 'Огт юм ярихгүй бүтэн өдөр хамт алхах.', desc: 'Мэдээж хоёулаа завтай байх хэрэгтэй'},
        {no: '6', title: 'Номын санд 1 өдрийн эрх авч ороод бие биендээ өөрийнхөө хамгийн дуртай номоо сонгож өгч уншуулах.', desc: 'Дараа нь оюутан цагаа дурсаад номын сангийн ороомог авч идэж болох юм'},
        {no: '7', title: 'Хэрвээ үнэхээр инээдтэй зүйл хийхийг хүсвэл гудамжинд гараад “Бид хоёр гэрлэлээ!” гэж орилох.', desc: 'Мэдээж үнэнээсээ гэрлэчхэж болохгүй'},
        {no: '8', title: 'Хэрвээ бэлэг солилцохыг хүсвэл хүүхэд байхдаа авахыг хүсдэг ч огт чадаагүй зүйлсээ ярилцаад бие биедээ авч өгөх.', desc: 'Жаахан гунигтай сонсогдож байгаа биз? Гэхдээ л хүн бүрт хүүхэд насандаа авч чадаагүй нэг зүйл байдаг мэт санагддаг юм'},
        {no: '9', title: 'Ханан дээр графит зураг зурах.', desc: 'Зөвшөөрөгдсөн бүсэд аюулгүй будгаар зурахад анхаараарай'},
        {no: '10', title: 'Газрын зурагтай тоглоом тоглох.', desc: 'Сайн мэдэх газраа сонгож аваад тухайн газрын товчхон газрын зураг хийгээд аль нэг байршлаас юм олох тоглоом.'},
        {no: '11', title: 'Хуучин хувцасны дэлгүүрт болзох.', desc: 'Тойрог орох. Бие биендээ сонирхолтой хувцас сонгож өгөөд гарах. (Нэгнийхээ сонголтыг үг дуугүй биелүүлэх дүрэмтэй)'},
        {no: '12', title: 'Дуртай номынхоо тухай ярилцаад, давхацсан нэг номоо "үүрд" солилцох.', desc: 'Яг нэг ном хэрнээ бие биенийхээ уншсан номыг уншина гэсэн үг'},
        {no: '13', title: '“Мэдэхгүй, чадахгүй, 999” тоглоод хожигдсон нь нэг өдөр "боол" нь болж 3 хүслийг нь биелүүлэх.', desc: 'Дүрэм нь их энгийн. Нэгнээсээ асуулт асуух бөгөөд хариулахдаа дээрх гурван үгний аль нэгээр л хариулах ёстой. 3 удаа буруу, алдаатай хариулсан нь хожигдоно. Нөгөө хүнээ хэр тэвчээртэйг шалгах бяцхан сорилт байх болно'},
        {no: '14', title: 'Хамт богино өгүүллэг бичих. Өгүүллэгээ дүрсжүүлэн богино хэмжээний кино хийх.', desc: 'Заавал мэргэжлийн, төгс байлгах гэж битгий зовоорой. Хөгжилтэй байх нь хамгийн чухал'},
        {no: '15', title: 'Тоглоомын талбайд залхтлаа тоглох.', desc: 'Зайрмаг авч идэх, баавгайн чихдэх, хүүхдүүдтэй хамт дээс үсэрч, чирта тоглон тэвэг үсрэх гэх мэт хүүхэд байхдаа тоглодог байснаараа хөгжилдөх'},
        {no: '16', title: 'Амралтын өдрийн өглөө эрт ууланд алхах.', desc: 'Алхах зуураа мод зүсэлж авах. (Зүгээр л "Энэ бидний мод" гэж нэрлэхэд хангалттай. Харин модон дээр тэмдэг үлдээж гэмтээхгүй байх хэрэгтэй шүү. Дараа нь эргэж ирэхэд дурсгалтай сайхан санагдах болно.'},
        {no: '17', title: 'Хамтдаа зураг зурах.', desc: 'Ямар нэгэн утгагүй, зүгээр л гарын аясаар ч зурсан болно. Тэрийгээ аяганд ч юм уу хэвлүүлээд нэгэндээ бэлэглэх. '},
        {no: '18', title: 'Хэрвээ хамт амьдардаг бол гэр дотроо майхан барьж тоглох.', desc: 'Орой болохоор дотор нь жижигхэн гэрэл асаагаад хүүхэд байхдаа хийдэг байсан зүйлсээ ярилцах'},
        {no: '19', title: 'Нэгнийхээ халаасанд нь нууц захиа бичиж үлдээх.', desc: 'Дараа нь огт санамсаргүй байдлаар олохуйц сайн нуух хэрэгтэй'},
        {no: '20', title: 'Хэрвээ хоёулаа зөвшөөрвөл “Нэг өдөр”-тэй болох.', desc: 'Хүссэнээрээ нэрлэж ч болно. Сар бүрийн тэр өдрөө хамтдаа ямар нэг “сонин” зүйл хийдэг байхаар тохиролцох.'},
        {no: '21', title: '"Яг кино шиг" болзоо зохиох.', desc: 'Өөрсдөдөө таалагдсан нэг киног сонгоод тухайн киноныхоо гол дүрүүд шиг хувцаслаж уулзах.'},
        {no: '22', title: 'Дурын нэг номоо сонгоод аль нэг хуудсанд нь нэгэндээ хандан хэлэхийг хүссэн үгээ бичээд гудамжинд зарах.', desc: 'Эсвэл огт танихгүй хүнд бэлэглэх. Хэзээ нэг өдөр та хоёр тэр номыг та хаа нэгтэйгээс олж хараад тэр үгийг олж уншина гээд боддоо. ("Serendipity" киноноос сэдэвлэв)'},
        {no: '23', title: 'Автобусанд сууж нэг эцсээс нь нөгөө эцэс рүү нь аялах.', desc: 'Дууны жагсаалтаа урьдчилан бэлдчихвэл зүгээр'},
        {no: '24', title: 'Жаахан "сахилгагүй" зүйл хийхийг хүсвэл хоёулаа чихэвчтэй хөгжим сонсоод гудамжинд бүжиглэх. ', desc: ''},
        {no: '25', title: 'Гэртээ "парк" байгуулж тоглох.', desc: '"Жинхэнэ" парк орж өдөржин тоглох. Галзуу хулганы хамгийн урд хамт суух'},
        {no: '26', title: 'Хамт керамикаар бүтээл хийх.', desc: 'Бүтээлээ нэгэндээ бэлэглэх.'},
        {no: '27', title: 'Жижигхэн төмөр хайрцаганд дурсгалтай зүйлс хийгээд хаа нэгтээ нуух юм уу, булж орхиод яг жилийн дараа хамт нээхээр тохиролцох.', desc: ''},
        {no: '28', title: 'Байрны урд талын өвөө нартай хамт шатар тоглох.', desc: ''},
        {no: '29', title: 'Нэгнийгээ сэтгэлд дотно хүнтэйгээ танилцуулах.', desc: 'Гэр бүлийн гишүүн, бага ангийн багш, мэнд устай явдаг танил өвөө эмээ гээд хүндэлж явдаг хүнтэйгээ хамт уулзах.'},
        {no: '30', title: 'Өглөө эрт уулзаад вокзалаас хамгийн эхэнд таарсан тасалбараа худалдан аваад шууд аялах. ', desc: ''},
        {no: '31', title: 'Нэгэндээ зориулж захиа бичээд, шууданд очоод 1 эсвэл 5 жилийн дараа хүлээн авахаар өгөх. ', desc: ''},
        {no: '32', title: 'Хамт уран зургийн галерей, музей, гэрэл зургийн үзэсгэлэн үзэх.', desc: 'Хэрвээ хүсвэл аль зургийг худалдаж авах байснаа ярилцах.'},
        {no: '33', title: 'Хамгийн дуртай хоолоо хамт идэх. Нэгэндээ хийж өгөх.', desc: ''},
        {no: '34', title: 'Ойрхон салхинд гарангаа натур зурах. Хэн илүү зурахаа үзээд, ялсандаа шагнал өгөх. ', desc: ''},
        {no: '35', title: 'Өглөө эрт уулзаад өглөөний цай хамт уух.', desc: ''},
        {no: '36', title: 'Нар мандах эсвэл шингэхийг хамт харах. Хүслээ шивнэх. ', desc: ''},
        {no: '37', title: 'Хамтдаа цусны төвд очиж, цусаа хандивлах.', desc: ''},
        {no: '38', title: 'Бие биенийхээ зурхайг уншиж өгөх.', desc: 'Тэгээд үнэн, худлаа эсэхийг нь ярилцаж нэгнээ танин мэдэх.'},
        {no: '39', title: 'Хамт цэцэг тариад нэгэндээ бэлэглэх.', desc: 'Цэцгэндээ нэр өгөх. '},
        {no: '40', title: 'Дээрх бүх болзоогоо дүрсжүүлээд зөвхөн өөрсдөдөө зориулж "Бидний нууц адал явдал" нэртэй гэрэл зургийн альбом хийх. ', desc: ''}
    ];

    for (let i = 0; i < ideas.length; i++) {
        const idea = ideas[i];
        var type1 = 'data-0="transform:translatey(0%);" data-center="transform:translatey(0%);transform:rotate(-4deg)"';
        var type2 = 'data-0="transform:translatey(-0%);" data-center="transform:translatey(0%);transform:rotate(8deg)"';
        var type3 = 'data-0="transform:translatey(0%);rotate:0;" data-center="transform:translatey(0%);transform:rotate(-2deg)"';
        var type4 = 'data-0="transform:translatey(0%);" data-center="transform:translatey(0%);transform:rotate(8deg)"';
        var type5 = 'data-0="transform:translatey(0%);" data-center="transform:translatey(0%);transform:rotate(-12deg)"';
        var type = '';

        if ([1, 6, 11, 16, 21, 26, 31, 36].includes(parseInt(idea.no))) {
            type = type1;
        }

        if ([2, 7, 12, 17, 22, 27, 32, 37].includes(parseInt(idea.no))) {
            type = type2;
        }

        if ([3, 8, 13, 18, 23, 28, 33, 38].includes(parseInt(idea.no))) {
            type = type3;
        }

        if ([4, 9, 14, 19, 24, 29, 34, 39].includes(parseInt(idea.no))) {
            type = type4;
        }

        if ([5, 10, 15, 20, 25, 30, 35, 40].includes(parseInt(idea.no))) {
            type = type5;
        }

        $("#story-carousel").append(`
            <li class="polaroid-item" ${type} >
                <strong>${idea.no}. </strong><span>${idea.title}</span>
                <p>${idea.desc}</p>
            </li>
        `);
    }

    $("#story-carousel").owlCarousel({
        dots: true,
		margin: 50,
        loop:true,
        autoplay: false,
        nav: true,
		  navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        responsive: {
            1: {
                items: 1,
            },
			600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        }
    });

    $(".ideasCount").text(ideas.length);

    $("#randomIdeaBtn").click(function (e) {
        e.preventDefault();

        // $("#randomIdeaModal").show();
        $("#randomIdeaModal").fadeIn();

        var idea = ideas[Math.floor(Math.random() * ideas.length)];

        $("#randomIdeaTitle").text(idea.title);
        $("#randomIdeaDesc").text(idea.desc);
    });

    $(".close").click(function () {
        // $("#randomIdeaModal").hide();
        $("#randomIdeaModal").fadeOut();
    });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById("randomIdeaModal");
    if (event.target == modal) {
        // modal.style.display = "none";
        $("#randomIdeaModal").fadeOut();
    }
}