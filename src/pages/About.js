import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';


export default function About() {
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="md" className="about">
      <h1 style={{textAlign: "center", marginBottom: "16px", fontSize: "45px", }}>About Noon</h1>
      <div dir="rtl">
        <h2 style={{marginBottom: "16px",}}>إذا كان أي مما يلي يصفك, فأنت في المكان الصحيح</h2>
        <ul style={{marginBottom: "16px",}}>
          <li>تريد أن تفهم الأمور التقنية في مجال العملات المشفرة والويب 3 بشكل مبسط و بدون كلام زائد.</li>
          <li>مهتم بالأساسيات والمبادئ ولا تبحث فقط عن "الجوهرة" القادمة في السوق.</li>
          <li>تريد أن تتعلم من شخص يريد أن يشارك ما تعلمه و غير مهتم  بالترويج لأي عملة أو مشروع. </li>
        </ul>

        <h2 style={{marginBottom: "16px",}}>ما محتوى الموقع</h2>
        <ul style={{marginBottom: "16px",}}>
          <li>كل ما أشاركه هو تبسيط لعشرات المقالات, الكتب والأوراق البيضاء التي أقوم بقرائتها. </li>
          <li>أحاول دائماً أن أتواصل مع  خبراء لأفهم الموضوع بالتفصيل قبل أن أشاركه معك.</li>
          <li>تركيزي الرئيسي و الوحيد هو فهم هذه التكنولوجيا وتصحيح بعض الأخطاء الشائعة في المجال.</li>
          <li>محتوى تعليمي عن إدارة أموالك, إدارة المخاطر و مبادئ الاستثمار</li>
          <li>مصادر مجانية للتعلم وقسم للوظائف في المستقبل</li>
        </ul>

        <h2 style={{marginBottom: "16px",}}>من أنا</h2>
        <p style={{marginBottom: "10px",}}>اخترت البقاء مجهول الهوية لأسباب تتعلق بالأمان و الخصوصية لكن هذه بعض النقاط التي سأشاركها عن نفسي:</p>
        <ul style={{marginBottom: "16px",}}>
          <li>أنا جديد في مجال العملات المشفرة, بدأت التعلم في سنة 2021. قبل وصول البيتكوين لأعلى سعر  وخسرت 70% من المبلغ الذي استثمرته, تعلمت من أخطائي وركزت على سحب أرباحي بشكل مكثف.</li>
          <li>قبل دخولي هذا المجال حققت نوعاً من الاستقرار المالي. قمت بذلك عن طريق العمل التقليدي الممل وبعض الأعمال الحرة في مجالات عديدة.</li>
          <li>أحب التعلم. خارج عالم العملات المشفرة أحب قراءة الكتب العلمية عن أي موضوع يثير اهتمامي.</li>
        </ul>

        <h2 style={{marginBottom: "16px",}}>للتواصل معي</h2>
        <p>أفضل طريقة للتواصل معي هي الإيميل <a href="mailto:noon@noon.wiki" target="_self">noon@noon.wiki</a></p>
        <p>بإمكانك متابعتي على تويتر <a href="https://twitter.com/0xnooon">@0xnooon</a></p>
        <p>اشترك <a href="http://www.noon.wiki">بقائمة المراسلة</a> للحصول على معلومات قيمة أسبوعياً</p>

        <footer>

        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", gap: "10px", padding: "8px" }}
        >
          <Link to="https://www.youtube.com/@noonayn">
            <Avatar
              alt="YouTube"
              sx={{ width: 24, height: 24, backgroundColor: "transparent" }}
            >
              {" "}
              <YouTubeIcon
                sx={{ color: "#757575", "&:hover": { color: "#FF0000" } }}
              />{" "}
            </Avatar>
          </Link>

          <Link to="https://twitter.com/0xnooon" style={{margin: "0px"}}>
            <Avatar
              alt="Twitter"
              sx={{ width: 24, height: 24, backgroundColor: "transparent" }}
            >
              {" "}
              <TwitterIcon
                sx={{ color: "#757575", "&:hover": { color: "#00acee" } }}
              />{" "}
            </Avatar>
          </Link>

        </Stack>
        </footer>
          <p style={{textAlign: "center"}}>2023 Noon</p>
      </div>
    </Container>
  )
}