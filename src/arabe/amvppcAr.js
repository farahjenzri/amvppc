import React, { Component } from 'react';
import agence from "../components/pages/amvppc/agence.jpg";
import './arab.css';
import { AiFillHome } from "react-icons/ai";
import ArHeader from './headerFooter/arHeader';
import ArFooter from './headerFooter/arFooter';
class AmvppcAr extends Component {
    state = {  }
    render() { 
        return (
        <section class="Aramvppc" title="amvppc">
            <ArHeader/>
            <img aria-hidden="true" src={agence} alt=""/>
            <div class="titre-amvppc" aria-label="titre" role="titre">
                <div class="titre1">
                <h2>اكتشف مجموعة منتجاتنا<br/>التذكارية من زيارتك لتونس</h2>
                </div>
                <div class="title" aria-hidden="true">الوكالة</div>
             </div>
            <div class="home-logo">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a aria-hidden='true'>&nbsp;&gt;&nbsp;الوكالة </a>
              
            </div>
            <div class='amvpp-definition'>
                <h2 class='title-definition' role="titre">
                وكالة إحياء التراث والتنمية الثقافية
                </h2>
                <p>أحدثت "الوكالة القومية لإحياء واستغلال التراث الأثري والتاريخي" طبقا للقانون عدد 11 لسنة 1988 والمؤرخ في 25 فيفري من السنة ذاتها والذي تمّ تنقيحه بمقتضى القانون عدد 16 لسنة 1997، المؤرخ في 3 مارس 1997 والذي ينصّ على تغيير اسم الوكالة إلى "وكالة إحياء التراث والتنمية الثقافية" وهي مؤسسة عمومية ذات صبغة غير إدارية تتمتع بالشخصية المدنية والاستقلال المالي وتخضع لأحكام القانون التجاري ولإشراف وزارة الثقافة والمحافظة على التراث.</p>
                <p>تتمثّل مهمّة الوكالة في تنفيذ سياسة الدولة في مختلف المجالات الثقافية وخاصة منها المتصلة بإحياء التراث الأثري والتاريخي والتصرّف فيه وتنمية الإبداع الفكري والأدبي والفني ولهذا الغرض كلفت الوكالة خاصّة بـ:</p>
                <ul>
                    <li>تحقيق وتنفيذ برامج إحياء التراث الأثري (حوالي ستين موقعا ومعلما ومتحفا)</li>
                    <li>إعداد وتنفيذ البرامج الثقافية وتنظيم التظاهرات بالتعاون مع مختلف الإدارات والمؤسسات والهيئات والجمعيات المعنية</li>
                    <li>منح التراخيص اللازمة لتنظيم البرامج والتظاهرات ذات الصبغة الترفيهية أو التجارية بالمواقع والمعالم التاريخية بعد موافقة سلطة الإشراف.</li>
                    <li>المساهمة في تطوير السياحة الثقافية بالتعاون والتنسيق مع مختلف المؤسسات المعنية.</li>
                    <li>العمل على التعريف بالإنتاج الثقافي الوطني بجميع تعبيراته وترويجه وتوزيعه وطنيا ودوليا.</li>
                    <li>العمل على الاستثمار وتبني المشاريع الثقافية والمساعدة على بعث الصناعات الثقافية.</li>
                </ul>
            </div>
            <div class='amvpp-definition'>
                <h2 class='title-definition' role="titre">
                مشمولات واسعة
                </h2>
               <p>تتكون الهيكلة الإدارية لوكالة إحياء التراث والتنمية الثقافية من سبع إدارات تترأسها الإدارة العامة.</p>
               <ul>
                   <li>إدارة الشؤون الإدارية والمالية</li>
                    <li>إدارة التنمية الثقافية</li>
                    <li>إدارة الإنتاج والتنشيط</li>
                    <li>إدارة الدراسات والبرمجة</li>
                    <li>إدارة التنسيق والمتابعة</li>
                    <li>الإدارة الفنية</li>
                    <li>إدارة الإستغلال.</li>
               </ul>
               <p>منذ إنشائها وبالتوازي مع التصرّف اليوميّ في المجال الذي كلّفت به، قامت الوكالة بعمل على أوسع نطاق لإحياء السياحة الثقافية وتنميتها بالاعتماد على مشروعات كبرى تستجيب لأهداف ثقافيّة وتربويّة وبيئيّة واجتماعيّة وسياحيّة واقتصاديّة. من ذلك إنشاء المنتزه الأثري بقرطاج سيدي بوسعيد، وتهيئة قصر البارون درلنجي بسيدي بوسعيد الذي يحتضن مركز الموسيقى العربية والمتوسطية، والمنتزه الأثريّ بدقة الذي يستفيد من جهة أخرى ببرنامج التعاون التونسي الفرنسي للمساعدة على إحياء الموقع، والمنتزه الأثريّ سبيطلة – القصرين الذي ولّد في هذه الجهة من وسط البلاد حركيّة سياحيّة واقتصاديّة كان لها مفعول جاذب على عدّة قطاعات من الأنشطة المحلّية.</p>
               <p>كما تتدخّل الوكالة لإصلاح وتجديد العديد من المواقع والمعالم في الوسط الحضري أو المحيط بالحضريّ، وتمثّل عملها على أوسع نطاق في إصلاح عدّة أجزاء من الحنايا الرومانية زغوان – قرطاج. وتعدّ شبكة المتاحف الحقل الأساسي الذي تعهّدت به وكالة إحياء التراث والتنمية الثقافية فعملت على إعادة تأهيل أقدم منشآتها، مثل متحف باردو الشهير، ومتاحف النفيضة ونابل والجم ومتاحف الفنون والتقاليد الشعبيّة بالمنستير وحومة السوق بجربة. وأثريت شبكة المتاحف بإنشاء وحدات جديدة بالمكنين أو شمتو أو متحف الصحراء بدوز. وشاركت الوكالة في بعث وتهيئة متاحف لأطراف أخرى مثل المتحف العسكريّ الوطني (بقصر الوردة) أو متحف خطّ مارث أو متحف الحرس الوطني أو متحف السينما.</p>
            </div>
            <div class='amvpp-definition'>
                <h2 class='title-definition' role="titre">
                إحياء وتنمية               </h2>
                <p>منذ انشاء الوكالة فتحت مواقع جديدة للزائرين ، منها موقع المقاطع القديمة بالهوّارية و الدواميس المسيحيّة بسوسة و مواقع " فرادي مايوس " سيدي خليفة بقرنبالية و"نيابوليس" بنابل و موقع الرمادية بقفصة. وكذلك الشأن بالنسبة إلى معالم عديدة منها أبراج الحمّامات وطبرقة وقليبية وغازي مصطفى بجربة والمهدية ورباط سوسة وجامعها الكبير ورباط المنستير. في هذا الميدان، تساهم الوكالة في المجهودات التي تقوم بها أطراف أخرى في ذات الاتجاه.</p>
                <p>كما أدخلت الوكالة أساليب الإرشاد لتسهيل الوصول إلى المواقع والمعالم وتيسير زيارتها، حيث هيّأت هياكل استقبال وإرشاد. وسعيا إلى إبراز الخصائص المعماريّة لعدد من المعالم والتأكيد على خصوصيتها، سعت الوكالة إلى إضفاء جمالية عليها عبر إنارتها ليلا إنارة فنية.</p>
                <p>ومن مظاهر نشاط الوكالة الأخرى : تنمية السياحة الثقافيّة في نطاق مخطّط وطني تمّ إقراره في ماي 1999 ودعيت فيه عدّة أطراف هي الثقافة والسياحة والبيئة، ومن نشاطها أيضا تنمية المنتوجات الثقافيّة وبالخصوص إصدار المنشورات بمختلف أشكالها، والمساهمة النشيطة في الاحتفال بشهر التراث وفي المعارض المركّزة على مواضيع مستلهمة من التراث، في تونس وفي الخارج.</p>
            </div>
            <div class='amvpp-strategie'>
                <h2 class='title-strategie' role="titre">
                إستراتيجية تحديثية
               </h2>
                <p>في نطاق تطبيق استراتيجية شاملة لتحديث قطاع الثقافة والتراث وتدعيم السياحة الثقافية أرست الدولة التونسية، بمساعدة البنك العالمي، في سنة 2002 ، مشروعا بمقدار جمليّ يبلغ 19,2 مليون يورو معدّا للتصرّف في التراث الثقافي وتثمينه.</p>
                <p>تمتد مدة انجاز هذا المشروع خمس سنوات ويرتكز على تدعيم الإطار القانوني والمؤسساتي، وتنمية المنتجات السياحيّة والثقافيّة وتسويقها، وتهيئة ستة مواقع مختارة والتصرّف فيها وهي : قرطاج و متحف باردو ومتحف سوسة ومدينة القيروان العتيقة والموقع الأثري بأوذنة وجزيرة جربة. وتضطلع وحدة المشروع المركّزة بوكالة إحياء التراث والتنمية الثقافية بمسؤولية إنجاز هذا المشروع.
                </p>
            </div>
            <ArFooter/>
         </section>
        );
    }
}
 
export default AmvppcAr;