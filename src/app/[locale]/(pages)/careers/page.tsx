"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Briefcase, Heart, TrendingUp, Globe, Award } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from '@/i18n';
import { useTranslations } from 'next-intl';

const createApplicationSchema = (t: (key: string) => string) => z.object({
  roleId: z.string().min(1, t('dialog.fields.validation.role')),
  firstName: z.string().min(2, t('dialog.fields.validation.firstName')),
  lastName: z.string().min(2, t('dialog.fields.validation.lastName')),
  email: z.string().email(t('dialog.fields.validation.email')),
  phone: z.string().min(10, t('dialog.fields.validation.phone')),
  linkedin: z.string().url(t('dialog.fields.validation.linkedin')).optional().or(z.literal('')),
  coverLetter: z.string().min(100, t('dialog.fields.validation.coverLetter')),
  experience: z.string().min(1, t('dialog.fields.validation.experience')),
  availability: z.string().min(1, t('dialog.fields.validation.availability'))
});

type ApplicationFormData = z.infer<ReturnType<typeof createApplicationSchema>>;

const createJobs = (t: (key: string) => string) => [
  {
    id: 'senior-quality-engineer-munich',
    title: 'Senior Quality Engineer',
    department: t('jobs.seniorQualityEngineer.department'),
    location: t('jobs.seniorQualityEngineer.location'),
    type: t('jobs.seniorQualityEngineer.type'),
    experience: t('jobs.seniorQualityEngineer.experience'),
    salary: '€65,000 - €85,000',
    remote: false,
    featured: true,
    description: t('jobs.seniorQualityEngineer.description'),
    requirements: [
      t('jobs.seniorQualityEngineer.requirements.0'),
      t('jobs.seniorQualityEngineer.requirements.1'),
      t('jobs.seniorQualityEngineer.requirements.2'),
      t('jobs.seniorQualityEngineer.requirements.3'),
      t('jobs.seniorQualityEngineer.requirements.4')
    ],
    responsibilities: [
      t('jobs.seniorQualityEngineer.responsibilities.0'),
      t('jobs.seniorQualityEngineer.responsibilities.1'),
      t('jobs.seniorQualityEngineer.responsibilities.2'),
      t('jobs.seniorQualityEngineer.responsibilities.3')
    ],
    benefits: [
      t('jobs.seniorQualityEngineer.benefits.0'),
      t('jobs.seniorQualityEngineer.benefits.1'),
      t('jobs.seniorQualityEngineer.benefits.2'),
      t('jobs.seniorQualityEngineer.benefits.3')
    ]
  },
  {
    id: 'field-engineer-stuttgart',
    title: 'Field Engineer',
    department: t('jobs.fieldEngineer.department'),
    location: t('jobs.fieldEngineer.location'),
    type: t('jobs.fieldEngineer.type'),
    experience: t('jobs.fieldEngineer.experience'),
    salary: '€50,000 - €65,000',
    remote: false,
    featured: true,
    description: t('jobs.fieldEngineer.description'),
    requirements: [
      t('jobs.fieldEngineer.requirements.0'),
      t('jobs.fieldEngineer.requirements.1'),
      t('jobs.fieldEngineer.requirements.2'),
      t('jobs.fieldEngineer.requirements.3'),
      t('jobs.fieldEngineer.requirements.4')
    ],
    responsibilities: [
      t('jobs.fieldEngineer.responsibilities.0'),
      t('jobs.fieldEngineer.responsibilities.1'),
      t('jobs.fieldEngineer.responsibilities.2'),
      t('jobs.fieldEngineer.responsibilities.3')
    ],
    benefits: [
      t('jobs.fieldEngineer.benefits.0'),
      t('jobs.fieldEngineer.benefits.1'),
      t('jobs.fieldEngineer.benefits.2'),
      t('jobs.fieldEngineer.benefits.3')
    ]
  },
  {
    id: 'quality-consultant-paris',
    title: 'Quality Consultant',
    department: t('jobs.qualityConsultant.department'),
    location: t('jobs.qualityConsultant.location'),
    type: t('jobs.qualityConsultant.type'),
    experience: t('jobs.qualityConsultant.experience'),
    salary: '€60,000 - €75,000',
    remote: false,
    featured: false,
    description: t('jobs.qualityConsultant.description'),
    requirements: [
      t('jobs.qualityConsultant.requirements.0'),
      t('jobs.qualityConsultant.requirements.1'),
      t('jobs.qualityConsultant.requirements.2'),
      t('jobs.qualityConsultant.requirements.3'),
      t('jobs.qualityConsultant.requirements.4')
    ],
    responsibilities: [
      t('jobs.qualityConsultant.responsibilities.0'),
      t('jobs.qualityConsultant.responsibilities.1'),
      t('jobs.qualityConsultant.responsibilities.2'),
      t('jobs.qualityConsultant.responsibilities.3')
    ],
    benefits: [
      t('jobs.qualityConsultant.benefits.0'),
      t('jobs.qualityConsultant.benefits.1'),
      t('jobs.qualityConsultant.benefits.2'),
      t('jobs.qualityConsultant.benefits.3')
    ]
  },
  {
    id: 'ev-specialist-milan',
    title: 'e-Mobility Specialist',
    department: t('jobs.evSpecialist.department'),
    location: t('jobs.evSpecialist.location'),
    type: t('jobs.evSpecialist.type'),
    experience: t('jobs.evSpecialist.experience'),
    salary: '€55,000 - €70,000',
    remote: false,
    featured: true,
    description: t('jobs.evSpecialist.description'),
    requirements: [
      t('jobs.evSpecialist.requirements.0'),
      t('jobs.evSpecialist.requirements.1'),
      t('jobs.evSpecialist.requirements.2'),
      t('jobs.evSpecialist.requirements.3'),
      t('jobs.evSpecialist.requirements.4')
    ],
    responsibilities: [
      t('jobs.evSpecialist.responsibilities.0'),
      t('jobs.evSpecialist.responsibilities.1'),
      t('jobs.evSpecialist.responsibilities.2'),
      t('jobs.evSpecialist.responsibilities.3')
    ],
    benefits: [
      t('jobs.evSpecialist.benefits.0'),
      t('jobs.evSpecialist.benefits.1'),
      t('jobs.evSpecialist.benefits.2'),
      t('jobs.evSpecialist.benefits.3')
    ]
  },
  {
    id: 'project-manager-remote',
    title: 'Project Manager',
    department: t('jobs.projectManager.department'),
    location: t('jobs.projectManager.location'),
    type: t('jobs.projectManager.type'),
    experience: t('jobs.projectManager.experience'),
    salary: '€70,000 - €90,000',
    remote: true,
    featured: false,
    description: t('jobs.projectManager.description'),
    requirements: [
      t('jobs.projectManager.requirements.0'),
      t('jobs.projectManager.requirements.1'),
      t('jobs.projectManager.requirements.2'),
      t('jobs.projectManager.requirements.3'),
      t('jobs.projectManager.requirements.4')
    ],
    responsibilities: [
      t('jobs.projectManager.responsibilities.0'),
      t('jobs.projectManager.responsibilities.1'),
      t('jobs.projectManager.responsibilities.2'),
      t('jobs.projectManager.responsibilities.3')
    ],
    benefits: [
      t('jobs.projectManager.benefits.0'),
      t('jobs.projectManager.benefits.1'),
      t('jobs.projectManager.benefits.2'),
      t('jobs.projectManager.benefits.3')
    ]
  },
  {
    id: 'graduate-trainee',
    title: 'Graduate Trainee Program',
    department: t('jobs.graduateTrainee.department'),
    location: t('jobs.graduateTrainee.location'),
    type: t('jobs.graduateTrainee.type'),
    experience: t('jobs.graduateTrainee.experience'),
    salary: '€45,000 - €55,000',
    remote: false,
    featured: true,
    description: t('jobs.graduateTrainee.description'),
    requirements: [
      t('jobs.graduateTrainee.requirements.0'),
      t('jobs.graduateTrainee.requirements.1'),
      t('jobs.graduateTrainee.requirements.2'),
      t('jobs.graduateTrainee.requirements.3'),
      t('jobs.graduateTrainee.requirements.4')
    ],
    responsibilities: [
      t('jobs.graduateTrainee.responsibilities.0'),
      t('jobs.graduateTrainee.responsibilities.1'),
      t('jobs.graduateTrainee.responsibilities.2'),
      t('jobs.graduateTrainee.responsibilities.3')
    ],
    benefits: [
      t('jobs.graduateTrainee.benefits.0'),
      t('jobs.graduateTrainee.benefits.1'),
      t('jobs.graduateTrainee.benefits.2'),
      t('jobs.graduateTrainee.benefits.3')
    ]
  }
];

const createBenefits = (t: (key: string) => string) => [
  {
    icon: Heart,
    title: t("benefits.items.0.title"),
    description: t("benefits.items.0.description")
  },
  {
    icon: TrendingUp,
    title: t("benefits.items.1.title"),
    description: t("benefits.items.1.description")
  },
  {
    icon: Globe,
    title: t("benefits.items.2.title"),
    description: t("benefits.items.2.description")
  },
  {
    icon: Award,
    title: t("benefits.items.3.title"),
    description: t("benefits.items.3.description")
  }
];

export default function CareersPage() {
  const t = useTranslations("careers");
  const [isClient, setIsClient] = useState(false);
  const [selectedJob] = useState<{
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
  } | null>(null);
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
    resolver: zodResolver(createApplicationSchema(t))
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


  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="text-lg text-gray-600">{t("loading")}</div>
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
              {t("hero.title")}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-slate-100">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("benefits.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("benefits.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {createBenefits(t).map((benefit, index) => {
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
              {t("positions.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("positions.subtitle")}
            </p>
          </div>

          {/* No Current Openings Message */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-12 text-center bg-white shadow-lg border-gray-200">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Current Openings
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  We don&apos;t have any open positions at the moment, but we&apos;re always looking for talented individuals to join our team.
                </p>
                <p className="text-gray-500 mb-8">
                  Feel free to send us your resume and we&apos;ll keep it on file for future opportunities.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/contact" className="inline-flex items-center">
                    Send Your Resume
                  </Link>
                </Button>
                <p className="text-sm text-gray-400">
                  We&apos;ll notify you when new positions become available
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedJob ? `${selectedJob.title} - ${t("dialog.defaultTitle")}` : t("dialog.defaultTitle")}
            </DialogTitle>
            <DialogDescription>
              {t("dialog.subtitle")}
            </DialogDescription>
          </DialogHeader>

          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="text-green-600 text-lg font-semibold mb-2">
                ✅ {t("dialog.successTitle")}
              </div>
              <p className="text-gray-600">
                {t("dialog.successSubtitle")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Role Selection */}
              <div>
                <Label htmlFor="roleId">{t("dialog.fields.role.label")} *</Label>
                <Select 
                  value={watchedRoleId} 
                  onValueChange={(value) => setValue('roleId', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("dialog.fields.role.placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    {createJobs(t).map((job) => (
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
                  <Label htmlFor="firstName">{t("dialog.fields.firstName.label")} *</Label>
                  <Input
                    id="firstName"
                    {...register('firstName')}
                    placeholder={t("dialog.fields.firstName.placeholder")}
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">{t("dialog.fields.lastName.label")} *</Label>
                  <Input
                    id="lastName"
                    {...register('lastName')}
                    placeholder={t("dialog.fields.lastName.placeholder")}
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">{t("dialog.fields.email.label")} *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder={t("dialog.fields.email.placeholder")}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">{t("dialog.fields.phone.label")} *</Label>
                  <Input
                    id="phone"
                    {...register('phone')}
                    placeholder={t("dialog.fields.phone.placeholder")}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* LinkedIn */}
              <div>
                <Label htmlFor="linkedin">{t("dialog.fields.linkedin.label")}</Label>
                <Input
                  id="linkedin"
                  {...register('linkedin')}
                  placeholder={t("dialog.fields.linkedin.placeholder")}
                />
                {errors.linkedin && (
                  <p className="text-red-600 text-sm mt-1">{errors.linkedin.message}</p>
                )}
              </div>

              {/* Experience & Availability */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="experience">{t("dialog.fields.experience.label")} *</Label>
                  <Select onValueChange={(value) => setValue('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("dialog.fields.experience.placeholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">{t("dialog.experienceOptions.entry")}</SelectItem>
                      <SelectItem value="mid">{t("dialog.experienceOptions.mid")}</SelectItem>
                      <SelectItem value="senior">{t("dialog.experienceOptions.senior")}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.experience && (
                    <p className="text-red-600 text-sm mt-1">{errors.experience.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="availability">{t("dialog.fields.availability.label")} *</Label>
                  <Select onValueChange={(value) => setValue('availability', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("dialog.fields.availability.placeholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">{t("dialog.availabilityOptions.asap")}</SelectItem>
                      <SelectItem value="1month">{t("dialog.availabilityOptions.1month")}</SelectItem>
                      <SelectItem value="2months">{t("dialog.availabilityOptions.2months")}</SelectItem>
                      <SelectItem value="3months">{t("dialog.availabilityOptions.3months")}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.availability && (
                    <p className="text-red-600 text-sm mt-1">{errors.availability.message}</p>
                  )}
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <Label htmlFor="coverLetter">{t("dialog.fields.coverLetter.label")} *</Label>
                <Textarea
                  id="coverLetter"
                  {...register('coverLetter')}
                  placeholder={t("dialog.fields.coverLetter.placeholder")}
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
                  {t("dialog.actions.cancel")}
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? t("dialog.actions.submitting") : t("dialog.actions.submit")}
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
              {t("cta.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t("cta.primary")}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t("cta.secondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
