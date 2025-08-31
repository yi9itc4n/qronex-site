"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, Users, Briefcase, Heart, TrendingUp, Globe, Award } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from '@/i18n';

const applicationSchema = z.object({
  roleId: z.string().min(1, 'Pozisyon seçiniz'),
  firstName: z.string().min(2, 'Ad en az 2 karakter olmalı'),
  lastName: z.string().min(2, 'Soyad en az 2 karakter olmalı'),
  email: z.string().email('Geçerli e-posta adresi giriniz'),
  phone: z.string().min(10, 'Geçerli telefon numarası giriniz'),
  linkedin: z.string().url('Geçerli LinkedIn profil linki giriniz').optional().or(z.literal('')),
  coverLetter: z.string().min(100, 'Ön yazı en az 100 karakter olmalı'),
  experience: z.string().min(1, 'Deneyim seviyesi seçiniz'),
  availability: z.string().min(1, 'Başlama tarihi seçiniz')
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const jobs = [
  {
    id: 'senior-quality-engineer-munich',
    title: 'Senior Quality Engineer',
    department: 'Kalite Mühendisliği',
    location: 'München, Almanya',
    type: 'Tam Zamanlı',
    experience: 'Senior (5+ yıl)',
    salary: '€65,000 - €85,000',
    remote: false,
    featured: true,
    description: 'Otomotiv sektöründe senior kalite mühendisi arıyoruz. BMW ve Mercedes projelerinde çalışma fırsatı.',
    requirements: [
      'Makine/Endüstri Mühendisliği mezunu',
      '5+ yıl otomotiv kalite deneyimi',
      'ISO 9001, IATF 16949 bilgisi',
      'Almanca (B2) ve İngilizce (C1)',
      'Six Sigma sertifikası tercih edilir'
    ],
    responsibilities: [
      'Kalite kontrol süreçlerini yönetmek',
      'Müşteri auditlerinde destek vermek',
      'Kalite iyileştirme projelerini yürütmek',
      'Ekip liderliği yapmak'
    ],
    benefits: [
      'Rekabetçi maaş + performans primi',
      'Sağlık sigortası',
      'Eğitim desteği',
      '25 gün yıllık izin'
    ]
  },
  {
    id: 'field-engineer-stuttgart',
    title: 'Field Engineer',
    department: 'Saha Operasyonları',
    location: 'Stuttgart, Almanya',
    type: 'Tam Zamanlı',
    experience: 'Mid-level (3+ yıl)',
    salary: '€50,000 - €65,000',
    remote: false,
    featured: true,
    description: 'Bosch ve Continental projelerinde on-site çalışacak saha mühendisi aranıyor.',
    requirements: [
      'Mühendislik mezunu (tercihen Makine/Endüstri)',
      '3+ yıl saha deneyimi',
      'Otomotiv tedarik zinciri bilgisi',
      'Almanca (B2) ve İngilizce (B2)',
      'Esnek çalışma saatleri'
    ],
    responsibilities: [
      'Müşteri lokasyonlarında kalite desteği',
      'Problem çözme ve containment',
      'Günlük raporlama',
      'Müşteri iletişimi'
    ],
    benefits: [
      'Araç + yakıt desteği',
      'Esnek çalışma saatleri',
      'Uluslararası proje fırsatları',
      'Kariyer gelişim programı'
    ]
  },
  {
    id: 'quality-consultant-paris',
    title: 'Quality Consultant',
    department: 'Danışmanlık',
    location: 'Paris, Fransa',
    type: 'Tam Zamanlı',
    experience: 'Senior (5+ yıl)',
    salary: '€60,000 - €75,000',
    remote: false,
    featured: false,
    description: 'Havacılık ve otomotiv sektörlerinde danışmanlık hizmetleri verecek uzman aranıyor.',
    requirements: [
      'Mühendislik veya İşletme mezunu',
      '5+ yıl kalite danışmanlığı deneyimi',
      'AS9100 ve IATF 16949 uzmanlığı',
      'Fransızca (Native) ve İngilizce (C1)',
      'Güçlü sunum becerileri'
    ],
    responsibilities: [
      'Müşteri kalite sistemlerini değerlendirmek',
      'İyileştirme önerileri geliştirmek',
      'Eğitim programları vermek',
      'Proje yönetimi'
    ],
    benefits: [
      'Yüksek müşteri etkileşimi',
      'Uluslararası projeler',
      'Profesyonel gelişim',
      'Bonus sistemi'
    ]
  },
  {
    id: 'ev-specialist-milan',
    title: 'e-Mobility Specialist',
    department: 'e-Mobility',
    location: 'Milano, İtalya',
    type: 'Tam Zamanlı',
    experience: 'Mid-level (3+ yıl)',
    salary: '€55,000 - €70,000',
    remote: false,
    featured: true,
    description: 'Elektrikli araç teknolojileri alanında uzmanlaşmış mühendis aranıyor.',
    requirements: [
      'Elektrik/Elektronik Mühendisliği mezunu',
      '3+ yıl EV/batarya deneyimi',
      'Elektrikli araç sistemleri bilgisi',
      'İtalyanca (B2) ve İngilizce (B2)',
      'Yenilikçi düşünce yapısı'
    ],
    responsibilities: [
      'EV kalite süreçlerini geliştirmek',
      'Batarya test süreçleri',
      'Teknik dokümantasyon',
      'R&D projelerine katılım'
    ],
    benefits: [
      'Cutting-edge teknoloji',
      'İnovasyon projeleri',
      'Eğitim ve sertifikasyon',
      'Hybrid çalışma modeli'
    ]
  },
  {
    id: 'project-manager-remote',
    title: 'Project Manager',
    department: 'Proje Yönetimi',
    location: 'Remote (Avrupa)',
    type: 'Tam Zamanlı',
    experience: 'Senior (5+ yıl)',
    salary: '€70,000 - €90,000',
    remote: true,
    featured: false,
    description: 'Uluslararası kalite projelerini yönetecek deneyimli proje yöneticisi aranıyor.',
    requirements: [
      'Mühendislik veya İşletme mezunu',
      '5+ yıl proje yönetimi deneyimi',
      'PMP veya PRINCE2 sertifikası',
      'İngilizce (C1), Almanca (B1+)',
      'Agile/Scrum bilgisi'
    ],
    responsibilities: [
      'Proje planlaması ve yürütmesi',
      'Risk yönetimi',
      'Stakeholder iletişimi',
      'Budget ve timeline kontrolü'
    ],
    benefits: [
      'Tam remote çalışma',
      'Uluslararası takım',
      'Yüksek sorumluluk',
      'Performans bonusu'
    ]
  },
  {
    id: 'graduate-trainee',
    title: 'Graduate Trainee Program',
    department: 'Eğitim Programı',
    location: 'Çoklu Lokasyon',
    type: 'Tam Zamanlı',
    experience: 'Entry Level (0-2 yıl)',
    salary: '€45,000 - €55,000',
    remote: false,
    featured: true,
    description: '18 aylık rotasyonel eğitim programı ile kariyer başlangıcı fırsatı.',
    requirements: [
      'Mühendislik mezunu (2023-2024)',
      'GPA 3.0+',
      'İngilizce (B2+)',
      'Öğrenmeye açık yaklaşım',
      'Takım çalışması becerileri'
    ],
    responsibilities: [
      'Farklı departmanlarda rotasyon',
      'Mentor eşliğinde öğrenim',
      'Proje katılımları',
      'Sunum ve raporlama'
    ],
    benefits: [
      'Kapsamlı eğitim programı',
      'Mentorship',
      'Hızlı kariyer gelişimi',
      'Uluslararası deneyim'
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Sağlık & Refah',
    description: 'Kapsamlı sağlık sigortası, fitness üyeliği ve mental sağlık desteği'
  },
  {
    icon: TrendingUp,
    title: 'Kariyer Gelişimi',
    description: 'Eğitim programları, sertifikasyon desteği ve mentorship fırsatları'
  },
  {
    icon: Globe,
    title: 'Uluslararası Fırsatlar',
    description: 'Avrupa genelinde proje deneyimi ve kültürlerarası çalışma ortamı'
  },
  {
    icon: Award,
    title: 'Ödüller & Tanınma',
    description: 'Performans bonusu, başarı ödülleri ve takdir programları'
  }
];

export default function CareersPage() {
  const [isClient, setIsClient] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema)
  });

  const watchedRoleId = watch('roleId');

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Application submitted:', data);
      
      setSubmitSuccess(true);
      reset();
      setTimeout(() => {
        setIsApplicationOpen(false);
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplyClick = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setValue('roleId', job.id);
    setIsApplicationOpen(true);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="text-lg text-gray-600">Yükleniyor...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Kariyer Fırsatları
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              QroneX ailesine katılın ve kalite mühendisliği alanında kariyerinizi şekillendirin
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Takım Üyesi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">15</div>
              <div className="text-blue-200">Farklı Ülke</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Çalışan Memnuniyeti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">4.8</div>
              <div className="text-blue-200">Glassdoor Puanı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-slate-100">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Neden QroneX?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Çalışanlarımızın gelişimi ve mutluluğu için sunduğumuz kapsamlı imkanlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center p-6 card-hover bg-white shadow-md border-gray-200">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-slate-100">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Açık Pozisyonlar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Size uygun pozisyonu bulun ve kariyerinizde yeni bir sayfa açın
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className={`p-6 card-hover bg-white shadow-md border-gray-200 ${job.featured ? 'border-blue-500 border-2' : ''}`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                          {job.featured && (
                            <Badge className="bg-orange-100 text-orange-800">
                              Öne Çıkan
                            </Badge>
                          )}
                          {job.remote && (
                            <Badge className="bg-green-100 text-green-800">
                              Remote
                            </Badge>
                          )}
                        </div>
                        <p className="text-blue-600 font-semibold mb-2">{job.department}</p>
                        <p className="text-gray-600 leading-relaxed">{job.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {job.experience}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {job.salary}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                      {job.requirements.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{job.requirements.length - 3} daha
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="lg:ml-8 mt-4 lg:mt-0">
                    <Button 
                      onClick={() => handleApplyClick(job)}
                      className="w-full lg:w-auto"
                    >
                      Başvur
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedJob ? `${selectedJob.title} - Başvuru Formu` : 'İş Başvurusu'}
            </DialogTitle>
            <DialogDescription>
              Lütfen aşağıdaki formu eksiksiz doldurunuz. CV&apos;nizi e-posta ile gönderebilirsiniz.
            </DialogDescription>
          </DialogHeader>

          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="text-green-600 text-lg font-semibold mb-2">
                ✅ Başvurunuz başarıyla gönderildi!
              </div>
              <p className="text-gray-600">
                En kısa sürede size dönüş yapacağız.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Role Selection */}
              <div>
                <Label htmlFor="roleId">Pozisyon *</Label>
                <Select 
                  value={watchedRoleId} 
                  onValueChange={(value) => setValue('roleId', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pozisyon seçiniz" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobs.map((job) => (
                      <SelectItem key={job.id} value={job.id}>
                        {job.title} - {job.location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.roleId && (
                  <p className="text-red-600 text-sm mt-1">{errors.roleId.message}</p>
                )}
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Ad *</Label>
                  <Input
                    id="firstName"
                    {...register('firstName')}
                    placeholder="Adınız"
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Soyad *</Label>
                  <Input
                    id="lastName"
                    {...register('lastName')}
                    placeholder="Soyadınız"
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">E-posta *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="ornek@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    {...register('phone')}
                    placeholder="+49 123 456 7890"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* LinkedIn */}
              <div>
                <Label htmlFor="linkedin">LinkedIn Profili</Label>
                <Input
                  id="linkedin"
                  {...register('linkedin')}
                  placeholder="https://linkedin.com/in/profiliniz"
                />
                {errors.linkedin && (
                  <p className="text-red-600 text-sm mt-1">{errors.linkedin.message}</p>
                )}
              </div>

              {/* Experience & Availability */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="experience">Deneyim Seviyesi *</Label>
                  <Select onValueChange={(value) => setValue('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Deneyim seviyesi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level (0-2 yıl)</SelectItem>
                      <SelectItem value="mid">Mid-level (3-5 yıl)</SelectItem>
                      <SelectItem value="senior">Senior (5+ yıl)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.experience && (
                    <p className="text-red-600 text-sm mt-1">{errors.experience.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="availability">Başlama Tarihi *</Label>
                  <Select onValueChange={(value) => setValue('availability', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Başlama tarihi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">Hemen</SelectItem>
                      <SelectItem value="1month">1 Ay İçinde</SelectItem>
                      <SelectItem value="2months">2 Ay İçinde</SelectItem>
                      <SelectItem value="3months">3 Ay İçinde</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.availability && (
                    <p className="text-red-600 text-sm mt-1">{errors.availability.message}</p>
                  )}
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <Label htmlFor="coverLetter">Ön Yazı *</Label>
                <Textarea
                  id="coverLetter"
                  {...register('coverLetter')}
                  placeholder="Neden bu pozisyon için uygun olduğunuzu ve QroneX'e neler katabileceğinizi kısaca açıklayın..."
                  rows={6}
                />
                {errors.coverLetter && (
                  <p className="text-red-600 text-sm mt-1">{errors.coverLetter.message}</p>
                )}
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsApplicationOpen(false)}
                >
                  İptal
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Gönderiliyor...' : 'Başvuru Gönder'}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Aradığınız Pozisyonu Bulamadınız mı?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              CV&apos;nizi gönderin, uygun fırsat çıktığında sizinle iletişime geçelim
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                CV Gönderin
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Şirket Hakkında
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
