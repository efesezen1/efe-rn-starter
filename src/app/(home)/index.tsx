import Feather from '@expo/vector-icons/Feather';
import { StatusBar } from 'expo-status-bar';
import { Card, cn } from 'heroui-native';
import type { FC } from 'react';
import { Image, Pressable, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { withUniwind } from 'uniwind';
import { ScreenScrollView } from '../../components/screen-scroll-view';
import { useAppTheme } from '../../contexts/app-theme-context';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedView = Animated.createAnimatedComponent(View);

const StyledFeather = withUniwind(Feather);

type HomeCardProps = {
  title: string;
  imageLight: string;
  imageDark: string;

  footer: string;
  path: string;
};

const cards: HomeCardProps[] = [
  {
    title: 'Welcome',
    imageLight:
      'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/heroui-native-example/home-themes-light.png',
    imageDark:
      'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/heroui-native-example/home-themes-dark.png',

    footer: 'HeroUI Native Starter with a few add-ons',
    path: 'themes',
  },
  {
    title: 'Start Building',
    imageLight:
      'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/heroui-native-example/home-showcases-light.png',
    imageDark:
      'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/heroui-native-example/home-showcases-dark-1.png',

    footer: '',
    path: 'showcases',
  },
];

const HomeCard: FC<HomeCardProps & { index: number }> = ({
  title,
  imageLight,
  imageDark,

  footer,
  path,
  index,
}) => {

  const { isDark } = useAppTheme();

  const rLightImageStyle = useAnimatedStyle(() => {
    return {
      opacity: isDark ? 0 : withTiming(0.4),
    };
  });

  const rDarkImageStyle = useAnimatedStyle(() => {
    return {
      opacity: isDark ? withTiming(0.4) : 0,
    };
  });

  return (
    <AnimatedPressable
      entering={FadeInDown.duration(300)
        .delay(index * 100)
        .easing(Easing.out(Easing.ease))}

    >
      <Card
        className={cn(
          'p-0 border border-zinc-200 shadow-none',
          isDark && 'border-zinc-900'
        )}
      >
        <AnimatedView
          entering={FadeIn}
          className="absolute inset-0 w-full h-full"
        >
          <AnimatedImage
            source={{ uri: imageLight }}
            className="absolute inset-0 w-full h-full"
            resizeMode="cover"
            style={rLightImageStyle}
          />
          <AnimatedImage
            source={{ uri: imageDark }}
            className="absolute inset-0 w-full h-full"
            resizeMode="cover"
            style={rDarkImageStyle}
          />
        </AnimatedView>
        <View className="gap-4">
          <Card.Header className="p-2">
          </Card.Header>
          {/* <Card.Body className="h-1" /> */}
          <Card.Footer className="px-3 pb-3 flex-row items-end gap-4">
            <View className="flex-1">
              <Card.Title className="text-2xl text-foreground/85">
                {title}
              </Card.Title>
              <Card.Description className="text-foreground/65 pl-0.5">
                {footer}
              </Card.Description>
            </View>
          </Card.Footer>
        </View>
      </Card>
    </AnimatedPressable>
  );
};

export default function App() {
  const { isDark } = useAppTheme();

  return (
    <ScreenScrollView>
      <View className="gap-6 mt-3">
        {cards.map((card, index) => (
          <HomeCard
            key={card.title}
            title={card.title}
            imageLight={card.imageLight}
            imageDark={card.imageDark}
            footer={card.footer}
            path={card.path}
            index={index}
          />
        ))}
      </View>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </ScreenScrollView>
  );
}
