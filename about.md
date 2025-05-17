---
layout: page
title: 关于我
---

<!-- 
  个人简历模板 - 适用于Jekyll主题
  该模板设计为在content区域显示，不与左侧边栏冲突
-->

<div class="resume-container">
  <header class="resume-header">
    <h1 class="profile-title">Egopposer</h1>
    <p class="profile-subtitle">人工智能专业 · 计算机视觉 · 医学影像处理</p>
    <p class="profile-quote">"在热情消逝前"</p>
    <div class="profile-intro">
      <p>重庆大学大数据与软件学院人工智能专业本科生，专业排名 1/64（前1%）</P>
      <p>熟悉计算机视觉、自然语言处理，对多模态大模型以及音频音乐领域具有浓厚兴趣。</p>
    </div>
    <div class="stats">
      <div class="stat-item">
        <div class="stat-number" data-count="3.88">0</div>
        <div class="stat-label">GPA/4.0</div>
      </div>
      <div class="stat-item">
        <div class="stat-number" data-count="3">0</div>
        <div class="stat-label">代表项目</div>
      </div>
      <div class="stat-item">
        <div class="stat-number" data-count="4">0</div>
        <div class="stat-label">荣誉奖项</div>
      </div>
    </div>
  </header>
  
  <main class="resume-content">
    <section id="education" class="resume-section">
      <h2 class="section-title">教育背景</h2>
      <div class="education-container">
        <div class="education-item">
          <div class="education-school">重庆大学</div>
          <div class="education-degree">大数据与软件学院 人工智能专业</div>
          <div class="education-period">2022.08 - 至今</div>
          <div class="education-detail">
            <p>GPA: 3.88/4.0 | 专业排名: 1/64（前1%）</p>
            <p><strong>主修课程：</strong>深度学习（97）、统计分析（97）、离散数学（96）、概率论与数理统计（95）、数据结构与算法（95）、数据库原理与设计（94）</p>
          </div>
        </div>
      </div>
    </section>
    <section id="skills" class="resume-section">
      <h2 class="section-title">核心技能</h2>
      <div class="skills-container">
        <div class="skill-item">
          <div class="skill-name">深度学习</div>
          <div class="skill-bar">
            <div class="skill-progress" data-level="90"></div>
          </div>
          <div class="skill-description">掌握卷积神经网络、注意力机制、对比学习等技术，能够独立设计与实现复杂的深度学习模型用于计算机视觉任务。</div>
        </div>
        <div class="skill-item">
          <div class="skill-name">医学影像处理</div>
          <div class="skill-bar">
            <div class="skill-progress" data-level="85"></div>
          </div>
          <div class="skill-description">擅长眼底医学影像分析与多标签分类任务，熟悉医学影像数据的预处理和增强技术，提出创新算法提升模型诊断准确率。</div>
        </div>
        <div class="skill-item">
          <div class="skill-name">前端开发</div>
          <div class="skill-bar">
            <div class="skill-progress" data-level="75"></div>
          </div>
          <div class="skill-description">熟练使用Vue3、Vite等技术栈进行前端开发，具备数据可视化能力，能够设计并实现交互式可视化系统。</div>
        </div>
        <div class="skill-item">
          <div class="skill-name">科研工具与方法</div>
          <div class="skill-bar">
            <div class="skill-progress" data-level="95"></div>
          </div>
          <div class="skill-description">善于构建高效科研工作流，熟练使用wandb平台进行实验记录与分析，利用Notion进行团队协作与任务管理。</div>
        </div>
        <div class="skill-item">
          <div class="skill-name">数学建模</div>
          <div class="skill-bar">
            <div class="skill-progress" data-level="85"></div>
          </div>
          <div class="skill-description">具有扎实的数学建模能力，曾获美国大学生数学建模比赛Meritorious Winner和全国大学生数学建模竞赛重庆省一等奖。</div>
        </div>
      </div>
    </section>
    
    <section id="projects" class="resume-section">
      <h2 class="section-title">代表项目</h2>
      <div class="projects-container">
        <div class="project-item">
          <div class="project-title">基于眼底医学影像的智能诊断系统</div>
          <div class="project-role">项目负责人 | 2025.01-至今</div>
          <div class="project-description">
            <p>• 提出一种融合三元注意力机制与RexNet网络结构的深度学习模型，开展多标签眼底图像分类任务研究，显著提升了模型在复杂环境与低频疾病诊断场景下的准确性。</p>
            <p>• 提出并实现了一种结合激进数据增强和扩散增强的对比学习预训练方法，有效提高了模型的特征表征能力，并显著缩短了下游任务的训练周期。</p>
            <p>• 利用wandb平台对团队深度学习实验的参数与结果进行系统性记录与分析；同时通过Notion团队协作空间，对团队成员任务分配、进度追踪及资料共享进行规范化管理。</p>
          </div>
          <div class="tech-tags">
            <span class="tech-tag">PyTorch</span>
            <span class="tech-tag">深度学习</span>
            <span class="tech-tag">医学影像</span>
            <span class="tech-tag">对比学习</span>
            <span class="tech-tag">多标签分类</span>
          </div>
        </div>
        <div class="project-item">
          <div class="project-title">中医交互式可视化系统</div>
          <div class="project-role">核心成员 | 2025.03-至今</div>
          <div class="project-description">
            <p>• 基于 Vue3 与 Vite 技术栈，设计并开发了基于力引导布局的复合弦图，实现了中医方剂与药材的高效交互式可视化展示。</p>
            <p>• 借助大语言模型 API，采用并发处理方式，有效解决了传统正则表达式难以处理的数据清洗与预处理问题，将非结构化数据转化为结构化 JSON 格式，提升了后续数据分析与处理效率。</p>
          </div>
          <div class="tech-tags">
            <span class="tech-tag">Vue3</span>
            <span class="tech-tag">Vite</span>
            <span class="tech-tag">数据可视化</span>
            <span class="tech-tag">大语言模型</span>
            <span class="tech-tag">并发处理</span>
          </div>
        </div>
        <div class="project-item">
          <div class="project-title">基于ROS2的自动瞄准算法</div>
          <div class="project-role">核心成员 | 2023.06-2024.02</div>
          <div class="project-description">
            <p>• 基于开源视觉自动瞄准算法，负责输入端的视频流预处理、目标仿射变换以及 PnP 位姿解算等关键模块的实现与优化，并成功集成并调试通过了基于扩展卡尔曼滤波（EKF）的目标跟踪算法。</p>
            <p>• 在 WSL 环境下，利用 Foxglove Studio 完成 ROS2 项目的数据参数可视化，实现了硬件平台上的相机标定及云台精确调平，有效提升了系统的整体稳定性与瞄准精度。</p>
          </div>
          <div class="tech-tags">
            <span class="tech-tag">ROS2</span>
            <span class="tech-tag">C++</span>
            <span class="tech-tag">计算机视觉</span>
            <span class="tech-tag">EKF滤波</span>
            <span class="tech-tag">相机标定</span>
          </div>
        </div>
      </div>
    </section>
    
    <section id="interests" class="resume-section">
      <h2 class="section-title">兴趣爱好</h2>
      <div class="interests-container">
        <div class="interest-item">
          <div class="interest-icon">
            <i class="fas fa-music"></i>
          </div>
          <div class="interest-title">音乐制作</div>
          <div class="interest-description">J-core，Botanica，Epic爱好者；Supersaw忠实拥趸</div>
        </div>
        <div class="interest-item">
          <div class="interest-icon">
            <i class="fas fa-volume-up"></i>
          </div>
          <div class="interest-title">指弹吉他</div>
          <div class="interest-description">日式指弹爱好者</div>
        </div>
        <div class="interest-item">
          <div class="interest-icon">
            <i class="fas fa-copy"></i>
          </div>
          <div class="interest-title">学术交流与分享</div>
          <div class="interest-description">我自己都不信</div>
        </div>
      </div>
    </section>
    
    <section id="contact" class="resume-section">
      <h2 class="section-title">联系我</h2>
      <div class="contact-grid">
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="contact-method">电子邮箱</div>
          <div class="contact-value">476057016line@gmail.com</div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fab fa-weixin"></i>
          </div>
          <div class="contact-method">微信</div>
          <div class="contact-note">wxid_hu1jfkv1b3xo22</div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fab fa-github"></i>
          </div>
          <div class="contact-method">GitHub</div>
          <div class="contact-value">github.com/line2345</div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <div class="contact-method">Discord</div>
          <div class="contact-value">111</div>

        </div>
      </div>
    </section>
  </main>
  
  <footer class="resume-footer">
    <p>© <span id="current-year">2025</span> Egopposer</p>
    <p>在行囊充沛后</p>
  </footer>
</div>

<!-- 内联CSS，确保样式不受Jekyll主题影响 -->
<style>
/* 重置部分样式，确保不被主题CSS干扰 */
.resume-container {
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #4a4a4a;
  line-height: 1.6;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

.resume-container * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.resume-container h1, .resume-container h2, .resume-container p {
  margin: 0;
  padding: 0;
}

/* 主要样式 */
.resume-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 1rem;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.resume-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #a6c1ee, #f9c5d1);
}

.profile-picture {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #a6c1ee, #f9c5d1);
  padding: 4px;
}

.profile-picture-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: #7a7a7a;
}

.profile-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #a6c1ee, #f9c5d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.profile-subtitle {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #7a7a7a;
}

.profile-quote {
  font-style: italic;
  margin-bottom: 1.5rem;
  color: #7a7a7a;
  position: relative;
  padding: 0 1.5rem;
}

.profile-quote::before, .profile-quote::after {
  content: '"';
  font-size: 1.5rem;
  color: rgba(166, 193, 238, 0.5);
  position: absolute;
}

.profile-quote::before {
  left: 0;
  top: -10px;
}

.profile-quote::after {
  right: 0;
  bottom: -10px;
}

.profile-intro {
  max-width: 800px;
  margin-bottom: 1.5rem;
}

.profile-intro p {
  margin-bottom: 0.8rem;
}

.profile-intro p:last-child {
  margin-bottom: 0;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #a6c1ee, #f9c5d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.3rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #7a7a7a;
}

.resume-section {
  margin-bottom: 4rem; /* 增加各部分之间的间距 */
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  text-align: center;
  margin-bottom: 3.5rem; /* 增加标题与内容的间距 */
  position: relative;
  padding-bottom: 0.8rem;
  font-size: 1.5rem;
  background-color: #fff; /* 添加背景色防止被内容遮挡 */
  z-index: 2; /* 确保标题始终在内容之上 */
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #a6c1ee, #f9c5d1);
  border-radius: 3px;
}

.education-container{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.skills-container, .projects-container, .interests-container, .contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1.5fr));
  gap: 1.5rem;
  z-index: 1;
}

.education-item, .skill-item, .project-item, .interest-item, .contact-item {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  padding: 1.5rem;
  width: 100%;
}

.education-item:hover, .skill-item:hover, .project-item:hover, .interest-item:hover, .contact-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
}

.education-school, .skill-name, .project-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: #a6c1ee;
}

.education-degree {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.education-period {
  font-size: 0.9rem;
  color: #7a7a7a;
  margin-bottom: 0.8rem;
}

.education-detail {
  margin-top: 0.8rem;
  line-height: 1.6;
}

.education-detail p {
  margin-bottom: 0.5rem;
}

.project-role {
  font-size: 0.9rem;
  color: #7a7a7a;
  margin-bottom: 0.8rem;
}

.skill-bar {
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 0.8rem;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #a6c1ee, #f9c5d1);
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

.skill-description, .project-description, .interest-description {
  font-size: 0.95rem;
  line-height: 1.5;
}

.project-description {
  margin-bottom: 1rem;
}

.project-description p {
  margin-bottom: 0.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  background-color: rgba(166, 193, 238, 0.1);
  color: #a6c1ee;
  border-radius: 4px;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
  transition: all 0.3s;
}

.tech-tag:hover {
  background-color: rgba(166, 193, 238, 0.2);
  transform: translateY(-2px);
}

.interest-item, .contact-item {
  text-align: center;
}

.interest-icon, .contact-icon {
  font-size: 2rem;
  color: #a6c1ee;
  margin-bottom: 0.8rem;
}

.interest-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.contact-method {
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.contact-value {
  margin-bottom: 0.4rem;
  word-break: break-word;
}

.contact-note {
  font-size: 0.8rem;
  color: #7a7a7a;
}

.resume-footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
  color: #7a7a7a;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .profile-title {
    font-size: 1.8rem;
  }
  
  .section-title {
    margin-bottom: 2.5rem;
  }
}
</style>

<!-- 内联JavaScript，确保功能不依赖外部文件 -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Animated counting for stat numbers
  const statNumbers = document.querySelectorAll('.stat-number');
  
  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) * 100) / 100;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  // Start animations when elements are in viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        
        if (target.classList.contains('stat-number')) {
          const finalValue = parseFloat(target.getAttribute('data-count'));
          animateValue(target, 0, finalValue, 1500);
        } else if (target.classList.contains('skill-progress')) {
          const level = target.getAttribute('data-level') + '%';
          target.style.width = level;
        }
        
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.3 });
  
  // Observe stats for counting animation
  statNumbers.forEach(statNumber => {
    observer.observe(statNumber);
  });
  
  // Observe skill bars for width animation
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    observer.observe(bar);
  });
  
  // Set current year
  document.getElementById('current-year').textContent = new Date().getFullYear();
});
</script>