function loadPartial(containerId, url, fallbackHtml) {
    const container = document.getElementById(containerId);

    if (!container) {
        return Promise.resolve();
    }

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
        })
        .catch(error => {
            console.error(`Error loading ${url}:`, error);
            if (fallbackHtml) {
                container.innerHTML = fallbackHtml;
            }
        });
}

function initSidebar() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    if (!sidebarLinks.length) {
        return;
    }

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const normalizedCurrentPath = currentPath === '' ? 'index.html' : currentPath;
    const samePageHashLinks = [];

    sidebarLinks.forEach(link => {
        const href = link.getAttribute('href');

        if (!href) {
            return;
        }

        const [pathPart, hashPart] = href.split('#');
        const linkPath = pathPart || normalizedCurrentPath;

        if (hashPart && linkPath === normalizedCurrentPath) {
            samePageHashLinks.push(link);
            link.classList.remove('active');

            link.addEventListener('click', function (event) {
                event.preventDefault();

                const targetElement = document.getElementById(hashPart);

                if (targetElement) {
                    samePageHashLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');

                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    if (window.innerWidth <= 1024) {
                        const sidebar = document.querySelector('.sidebar');
                        sidebar?.classList.remove('open');
                    }
                }
            });
        } else if (!hashPart && linkPath === normalizedCurrentPath) {
            link.classList.add('active');
        }
    });

    if (samePageHashLinks.length) {
        const sections = document.querySelectorAll('.section[id]');
        const observerOptions = {
            rootMargin: '-80px 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    samePageHashLinks.forEach(link => {
                        const href = link.getAttribute('href');

                        if (!href) {
                            return;
                        }

                        const linkId = href.split('#')[1];

                        if (linkId === id) {
                            samePageHashLinks.forEach(l => l.classList.remove('active'));
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));

        const initialHash = window.location.hash.slice(1);

        if (initialHash) {
            samePageHashLinks.forEach(link => {
                const href = link.getAttribute('href');

                if (!href) {
                    return;
                }

                const linkId = href.split('#')[1];

                if (linkId === initialHash) {
                    samePageHashLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        }
    }

    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        document.addEventListener('click', event => {
            if (window.innerWidth <= 1024) {
                if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
                    sidebar.classList.remove('open');
                }
            }
        });
    }
}

function initialiseShell() {
    loadPartial('sidebar-container', 'sidebar.html')
        .then(() => {
            initSidebar();
        });

    loadPartial('header-container', 'header.html', '<div class="header"><h1>STEVEN VO</h1><p>Error loading header</p></div>');
    loadPartial('footer-container', 'footer.html', '<footer><p>&copy; 2025 STEVEN VO. All rights reserved.</p></footer>');
}

function toggleExperience(header) {
    const experienceItem = header.closest('.experience-item');

    if (experienceItem) {
        experienceItem.classList.toggle('expanded');
    }
}

const colesImageFiles = [
    'IMG_6339.JPEG',
    'IMG_6340.JPEG',
    'IMG_6341.JPEG',
    'IMG_6342.JPEG',
    'IMG_6343.JPEG',
    'IMG_6346.JPEG',
    'IMG_6348.JPEG',
    'IMG_6349.JPEG',
    'IMG_6350.JPEG',
    'IMG_6420.JPEG',
    'IMG_6421.JPEG',
    'IMG_6445.JPEG',
    'IMG_6446.JPEG',
    'IMG_6479.JPEG',
    'IMG_7027.JPEG',
    'IMG_7217.JPEG',
    'IMG_7225.JPEG',
    'IMG_7228.JPEG'
];

const bertocchiImageFiles = [
    'IMG_0069.JPEG',
    'IMG_0079.JPEG',
    'IMG_0930.JPEG',
    'IMG_1184.JPEG',
    'IMG_1187.JPEG',
    'IMG_2770.JPEG',
    'IMG_4023.JPEG',
    'IMG_4025.JPEG',
    'IMG_4199.JPEG',
    'IMG_4200.JPEG',
    'IMG_4537.JPEG',
    'IMG_4584.JPEG',
    'IMG_4886.JPEG',
    'IMG_8061.JPEG',
    'IMG_8744.JPEG',
    'IMG_8745.JPEG',
    'IMG_8746.JPEG',
    'IMG_8749.JPEG',
    'IMG_8847.JPEG',
    'IMG_8852.JPEG',
    'IMG_8861.JPEG',
    'IMG_8868.JPEG',
    'IMG_8901.JPEG',
    'IMG_8907.JPEG',
    'IMG_8917.JPEG',
    'IMG_9182.JPEG',
    'IMG_9214.JPEG',
    'IMG_9291.JPEG',
    'IMG_9339.JPEG',
    'IMG_9343.JPEG',
    'IMG_9423.JPEG',
    'IMG_9427.JPEG',
    'IMG_9428.JPEG',
    'IMG_9437.JPEG',
    'IMG_9445.JPEG',
    'IMG_9696.JPEG',
    'IMG_9991.JPEG',
    'IMG_9992.JPEG',
    'IMG_9993.JPEG',
    'IMG_9994.JPEG'
];

const keytechImageFiles = [
    '0178e64f46dc4691b8b9c4ca4e084117.jpg',
    '04fab494c93992a3ff12ce6edfd060e1.jpg',
    '097e698dcf5e50e52b3eb7e18c574c1f.jpg',
    '09ce11b58a3699f31b471642afa81cd1.jpg',
    '0d7d25b4eb117845ae20b21ad5758c8f.jpg',
    '0ed0b3297a8baa0046613c29673e4c41.jpg',
    '110c70871d475cf0970696636dcdd5c1.jpg',
    '119ce8ea5c6a0ea88946042402f6232e.jpg',
    '12c1ee71095582b7eaa2bdd4576ec803.jpg',
    '139293241b10a35370f728c4ce13384d.jpg',
    '1429eae992d8b2a0c28be9ab7a8108e5.jpg',
    '1a257638ffc1627672844b33db2c48a4.jpg',
    '1a820105ac563b9e8750511d031e2323.jpg',
    '1adc5fa4a4b4db047bf8f262c7699a0e.jpg',
    '1b4edc7b1a02c31291573afc4a28d8d9.jpg',
    '1c0cd6fc9e6d16cee891b10fc9c93cbf.jpg',
    '1c2031ea11cb67578e183ce383e90b61.jpg',
    '1cc7094854c1d21dd366cb7d13f19b00.jpg',
    '1d40074bec9769c8187f84ce7f085be1.jpg',
    '234cf92cd31afa5968703dffc14ba040.jpg',
    '23aa58a4e01aa965f4dabaf3a0847274.jpg',
    '2abc31a561f8d9a442b50b098ad6d60d.jpg',
    '2e48fbb05ed2f7275fe453a32470dd81.jpg',
    '2fc02bbd6525e3ed43ffd0b4c0fdf53b.jpg',
    '33730541318381af6c05b5fb13337fba.jpg',
    '3af1750eb74978204775dbff4809c575.jpg',
    '3b2eedf8355fc0400ab70b38e899d40e.jpg',
    '3df18733fc0d69f4eb8c0e618b8c13ad.jpg',
    '3e5ac34afa8784047a2bcbae53cdf610.jpg',
    '3fff6b26f9fa2840aae921b71e1b035d.jpg',
    '4504bc094f2993164e2cf4d92689e576.jpg',
    '454b8c51abc3544b991dfc1582d8a21f.jpg',
    '4901b4f2fb669e958d4eb646d1eb2d01.jpg',
    '4e5d03d1aec20675a1f40dc761951648.jpg',
    '50f960dd48dcec1b391e130508bcaec0.jpg',
    '54f5d32bc11117ba3c77887511e3202e.jpg',
    '5500e0585cb3c4a55285f2a82b3002bc.jpg',
    '571207597ab03d9a072c2e245724a8c5.jpg',
    '57c1a0c23813993ffdb693c74784b8ad.jpg',
    '57f9667dde6f161806f429a7f6b279d9.jpg',
    '58ffb3437a3d18952c0fa445287226b5.jpg',
    '59f0a9fc4cd9dc034977d62cd7fcc5a8.jpg',
    '5b22d79fee48bd2911f8fdc8617f4a24.jpg',
    '5c842386101e42da6a18f78e676c107c.jpg',
    '5fd8c8e8675a39233903e09d818fac56.jpg',
    '65f6bff63a7e52140da1d2c0846cb44b.jpg',
    '6b0c2a4b2ae97845d3c3229ebfd8374e.jpg',
    '6c2aee268ba75f1d48448c41f8a0d0a1.jpg',
    '6d775baea52c0024ff5fc7d63cc04bb4.jpg',
    '6ecc56c3733e2a733f68ca82e4bb0ae0.jpg',
    '7ae29b81bf8e320349e2de3af42b2548.jpg',
    '7b228e1e093fc9683af08cbbff6a268a.jpg',
    '7f8c04ea2ff7c9c26f4780eb35644942.jpg',
    '85fff2cdc175751e7597f2018d68e82d.jpg',
    '88780a41d387250e2dbe1ce9f4a838d6.jpg',
    '8c195d92752e7685cb8ad158622a2272.jpg',
    '8c9905946f156cea00ef95ff20cdc5c8.jpg',
    '8f1ab6f8d666a1c429fbfbde5f93d34f.jpg',
    '9128fabc8d8650d900c2c8fcd53de135.jpg',
    '95fd3db31290574576e9c45ea457be66.jpg',
    '97fd646b0e64e6af940d19a62b1b3ebf.jpg',
    '9afbafe45ed0c8399e375e082d75ef2a.jpg',
    '9b086bd837aa3cd140bb841531969efe.jpg',
    'a0827c93dc941caf20ccce9a8593f425.jpg',
    'a1d1c1f54ebde6f3747c2fc09987a820.jpg',
    'a30386ca7c97c8ef063a7226dfde309a.jpg',
    'a5f822753fbd4c4654672e7eeb069a15.jpg',
    'abf07d8239d74eb957ff07daa9abd671.jpg',
    'ac6b20a59d8767ef425ab0df9c47bb28.jpg',
    'd9faaaf3de1cb00aa6133131137f7b28.jpg',
    'e08e0da9c8a7ba0783e298468d2bad52.jpg',
    'f84952299aba88d7d1a506944e49f9d2.jpg'
];

const flindersImageFiles = [
    'commendationLetter.jpg'
];

const hcmutImageFiles = [
    'bachelorCelemorny.jpg'
];

const galleryBlueprints = {
    colesGallery: {
        title: 'Battery Bull Operator Playlist',
        description: 'Highlights from the Coles Distribution Centre in Edinburgh.',
        images: [
            {
                type: 'video',
                src: 'https://www.youtube.com/embed/0fWFcfbdnuk?rel=0',
                caption: 'Battery Bull Operator | Video Overview'
            },
            ...colesImageFiles.map(file => {
            const baseName = file.replace(/\.[^.]+$/, '');

            return {
                    type: 'image',
                src: 'projects/coles/images/' + file,
                caption: baseName.replace(/_/g, ' ')
                };
            })
        ]
    },
    bertocchiGallery: {
        title: 'Bertocchi Workshop Snapshot',
        description: 'Daily operations, fabrication tasks, and workshop improvements at Bertocchi Smallgoods.',
        images: bertocchiImageFiles.map((file, index) => {
            const baseName = file.replace(/\.[^.]+$/, '');

            return {
                type: 'image',
                src: 'projects/bertocchi/images/' + file,
                caption: baseName || `Bertocchi Workshop ${index + 1}`
            };
        })
    },
    keytechGallery: {
        title: 'Key Tech Project Highlights',
        description: 'Selected automation and engineering projects delivered by Key Tech Vietnam.',
        images: keytechImageFiles.map((file, index) => {
            const baseName = file.replace(/\.[^.]+$/, '');

            return {
                type: 'image',
                src: 'projects/keytech/images/' + file,
                caption: `Key Tech Project ${index + 1}`
            };
        })
    },
    flindersGallery: {
        title: 'Flinders University Playlist',
        description: 'Images and documents from Flinders University.',
        images: flindersImageFiles.map((file, index) => {
            const baseName = file.replace(/\.[^.]+$/, '');

            return {
                type: 'image',
                src: 'projects/flinders/' + file,
                caption: baseName.replace(/([A-Z])/g, ' $1').trim() || `Flinders University ${index + 1}`
            };
        })
    },
    hcmutGallery: {
        title: 'HCMUT Playlist',
        description: 'Images and documents from Ho Chi Minh City University of Technology.',
        images: hcmutImageFiles.map((file, index) => {
            const baseName = file.replace(/\.[^.]+$/, '');

            return {
                type: 'image',
                src: 'projects/hcmut/' + file,
                caption: baseName.replace(/([A-Z])/g, ' $1').trim() || `HCMUT ${index + 1}`
            };
        })
    }
};

let lastFocusedElement = null;
const galleryInstances = {};

function buildGallery(id, config) {
    const overlay = document.getElementById(id);

    if (!overlay || !config) {
        return;
    }

    const titleElement = overlay.querySelector('.gallery-title');
    const descriptionElement = overlay.querySelector('.gallery-description');

    if (titleElement && config.title) {
        titleElement.textContent = config.title;
    }

    if (descriptionElement && config.description) {
        descriptionElement.textContent = config.description;
    }

    const imageElement = overlay.querySelector('.gallery-media img');

    if (!imageElement) {
        return;
    }

    const instance = galleryInstances[id] || {
        currentIndex: 0
    };

    instance.config = config;
    instance.elements = {
        image: imageElement,
        video: overlay.querySelector('.gallery-media iframe'),
        caption: overlay.querySelector('.gallery-caption'),
        counter: overlay.querySelector('.gallery-counter'),
        prev: overlay.querySelector('.gallery-prev'),
        next: overlay.querySelector('.gallery-next')
    };

    galleryInstances[id] = instance;

    if (!overlay.dataset.galleryControlsBound) {
        const { prev, next } = instance.elements;

        if (prev) {
            prev.addEventListener('click', event => {
                event.preventDefault();
                navigateGallery(id, -1);
            });
        }

        if (next) {
            next.addEventListener('click', event => {
                event.preventDefault();
                navigateGallery(id, 1);
            });
        }

        overlay.dataset.galleryControlsBound = 'true';
    }

    renderGallerySlide(id);
}

function renderGallerySlide(id) {
    const instance = galleryInstances[id];

    if (!instance || !instance.config || !Array.isArray(instance.config.images) || !instance.config.images.length) {
        return;
    }

    const images = instance.config.images;

    if (instance.currentIndex < 0 || instance.currentIndex >= images.length) {
        instance.currentIndex = 0;
    }

    const activeImage = images[instance.currentIndex];
    const { image, video, caption, counter, prev, next } = instance.elements || {};

    if (activeImage.type === 'video') {
        if (image) {
            image.style.display = 'none';
        }

        if (video) {
            const videoUrl = activeImage.src;

            if (video.dataset.src !== videoUrl) {
                video.src = videoUrl;
                video.dataset.src = videoUrl;
            }

            video.style.display = 'block';
        }
    } else {
        if (video) {
            if (video.dataset.src) {
                video.src = '';
                delete video.dataset.src;
            }

            video.style.display = 'none';
        }

        if (image) {
            image.style.display = 'block';
            image.src = activeImage.src;
            image.alt = activeImage.caption || `Gallery image ${instance.currentIndex + 1}`;
        }
    }

    if (caption) {
        if (activeImage.caption) {
            caption.textContent = activeImage.caption;
            caption.style.display = '';
        } else {
            caption.textContent = '';
            caption.style.display = 'none';
        }
    }

    if (counter) {
        counter.textContent = `${instance.currentIndex + 1} / ${images.length}`;
    }

    if (prev) {
        prev.disabled = images.length <= 1 || instance.currentIndex === 0;
    }

    if (next) {
        next.disabled = images.length <= 1 || instance.currentIndex === images.length - 1;
    }
}

function navigateGallery(id, direction) {
    const instance = galleryInstances[id];

    if (!instance || !instance.config || !Array.isArray(instance.config.images) || !instance.config.images.length) {
        return;
    }

    const newIndex = instance.currentIndex + direction;

    if (newIndex < 0 || newIndex >= instance.config.images.length) {
        return;
    }

    instance.currentIndex = newIndex;
    renderGallerySlide(id);
}

function openGallery(id) {
    const overlay = document.getElementById(id);

    if (!overlay) {
        return;
    }

    const config = galleryBlueprints[id];

    if (config) {
        buildGallery(id, config);
    }

    const instance = galleryInstances[id];

    if (instance) {
        instance.currentIndex = 0;
        renderGallerySlide(id);
    }

    if (document.activeElement instanceof HTMLElement) {
        lastFocusedElement = document.activeElement;
    } else {
        lastFocusedElement = null;
    }

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');

    const closeButton = overlay.querySelector('.gallery-close');

    if (closeButton) {
        requestAnimationFrame(() => {
            if (typeof closeButton.focus === 'function') {
                try {
                    closeButton.focus({ preventScroll: true });
                } catch (error) {
                    closeButton.focus();
                }
            }
        });
    }
}

function closeGallery(target) {
    const overlay = typeof target === 'string' ? document.getElementById(target) : target;

    if (!overlay) {
        return;
    }

    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');

    if (!document.querySelector('.gallery-overlay.active')) {
        document.body.classList.remove('no-scroll');

        if (lastFocusedElement) {
            try {
                lastFocusedElement.focus({ preventScroll: true });
            } catch (error) {
                lastFocusedElement.focus();
            }
            lastFocusedElement = null;
        }
    }

    const iframe = overlay.querySelector('.gallery-slide iframe');

    if (iframe && iframe.dataset.src) {
        iframe.src = '';
        delete iframe.dataset.src;
    }
}

function handleGalleryKeydown(event) {
    const activeOverlay = document.querySelector('.gallery-overlay.active');

    if (!activeOverlay) {
        return;
    }

    if (event.key === 'Escape') {
        closeGallery(activeOverlay);
        return;
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        const direction = event.key === 'ArrowLeft' ? -1 : 1;
        navigateGallery(activeOverlay.id, direction);
    }
}

function initGalleries() {
    const triggerButtons = document.querySelectorAll('[data-gallery-target]');

    if (!triggerButtons.length) {
        return;
    }

    Object.entries(galleryBlueprints).forEach(([id, config]) => {
        const overlay = document.getElementById(id);

        if (!overlay) {
            return;
        }

        buildGallery(id, config);

        if (!overlay.dataset.galleryInitialised) {
            overlay.addEventListener('click', event => {
                if (event.target === overlay) {
                    closeGallery(overlay);
                }
            });

            const closeButton = overlay.querySelector('.gallery-close');

            if (closeButton) {
                closeButton.addEventListener('click', event => {
                    event.preventDefault();
                    closeGallery(overlay);
                });
            }

            overlay.dataset.galleryInitialised = 'true';
        }
    });

    triggerButtons.forEach(button => {
        if (button.dataset.galleryInitialised === 'true') {
            return;
        }

        button.addEventListener('click', event => {
            event.stopPropagation();

            const targetId = button.getAttribute('data-gallery-target');

            if (targetId) {
                openGallery(targetId);
            }
        });

        button.dataset.galleryInitialised = 'true';
    });

    if (!document.body.dataset.galleryKeydownBound) {
        document.addEventListener('keydown', handleGalleryKeydown);
        document.body.dataset.galleryKeydownBound = 'true';
    }
}

window.toggleExperience = toggleExperience;

document.addEventListener('DOMContentLoaded', () => {
    initialiseShell();
    initGalleries();
});

