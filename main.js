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

