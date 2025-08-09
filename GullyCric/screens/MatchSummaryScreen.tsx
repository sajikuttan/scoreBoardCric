import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MatchSummaryScreen = ({ route }) => {
    const { matchSummary } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Match Summary</Text>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Teams:</Text>
                <Text>{matchSummary.teamA} vs {matchSummary.teamB}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Scores:</Text>
                <Text>{matchSummary.teamA}: {matchSummary.scoreA}</Text>
                <Text>{matchSummary.teamB}: {matchSummary.scoreB}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Top Performers:</Text>
                <Text>Runs: {matchSummary.topRuns}</Text>
                <Text>Wickets: {matchSummary.topWickets}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Match Result:</Text>
                <Text>{matchSummary.result}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    section: {
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
    },
});

export default MatchSummaryScreen;